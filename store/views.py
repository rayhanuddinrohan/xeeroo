import csv
import os
import posixpath
import zipfile
from io import StringIO
from urllib.parse import unquote, urlparse
from urllib.request import urlopen
from xml.etree import ElementTree as ET

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.models import User
from django.core.files.base import ContentFile
from django.db.models import Count, Q, Sum
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.utils.text import slugify
from django.utils import timezone

from .models import Banner, Category, CustomerProfile, Order, OrderItem, Product, ProductImage


STATUS_STEPS = {
    "pending": 1,
    "approved": 2,
    "paid": 3,
    "processing": 4,
    "packed": 5,
    "shipped": 6,
    "out_for_delivery": 7,
    "delivered": 8,
    "cancelled": 0,
}

XLSX_NS = {"main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}


def _auth_required_response(request, action_label="continue", ajax=False):
    target_url = f"{reverse('auth_required')}?next={request.get_full_path()}&action={action_label}"
    if ajax:
        return JsonResponse(
            {
                "ok": False,
                "requires_auth": True,
                "redirect_url": target_url,
                "message": "Please sign in first.",
            },
            status=401,
        )
    return redirect(target_url)


def _download_image_from_url(image_url, fallback_name):
    parsed = urlparse(image_url)
    if parsed.scheme not in {"http", "https"}:
        raise ValueError("Only http and https image links are supported.")

    file_name = os.path.basename(unquote(parsed.path)) or f"{fallback_name}.jpg"
    safe_name = slugify(os.path.splitext(file_name)[0]) or slugify(fallback_name) or "product-image"
    extension = os.path.splitext(file_name)[1].lower() or ".jpg"
    if len(extension) > 8:
        extension = ".jpg"

    with urlopen(image_url, timeout=15) as response:
        content = response.read()

    if not content:
        raise ValueError("The image link did not return any file content.")

    return ContentFile(content, name=f"{safe_name}{extension}")


def _resolve_product_image(uploaded_file, image_url, fallback_name):
    if uploaded_file:
        return uploaded_file
    if image_url:
        return _download_image_from_url(image_url, fallback_name)
    return None


def _create_product_with_assets(
    *,
    category,
    name,
    price,
    stock,
    description,
    main_image,
    gallery_images=None,
    gallery_urls=None,
):
    product = Product.objects.create(
        category=category,
        name=name,
        price=price,
        stock=stock,
        description=description,
        image=main_image,
    )

    for gallery_image in gallery_images or []:
        ProductImage.objects.create(product=product, image=gallery_image)

    for index, gallery_url in enumerate(gallery_urls or [], start=1):
        cleaned_url = (gallery_url or "").strip()
        if not cleaned_url:
            continue
        downloaded = _download_image_from_url(cleaned_url, f"{name}-gallery-{index}")
        ProductImage.objects.create(product=product, image=downloaded)

    return product


def _normalize_header(value):
    return str(value or "").strip().lower().replace(" ", "_")


def _category_from_text(category_name):
    cleaned = str(category_name or "").strip()
    if not cleaned:
        raise ValueError("Category is required.")
    category = Category.objects.filter(name__iexact=cleaned).first()
    if category:
        return category
    return Category.objects.create(name=cleaned)


def _parse_gallery_url_text(raw_value):
    cleaned = str(raw_value or "").replace("\n", ",").replace("|", ",")
    return [item.strip() for item in cleaned.split(",") if item.strip()]


def _iter_bulk_product_rows(uploaded_file):
    extension = os.path.splitext(uploaded_file.name)[1].lower()
    if extension == ".csv":
        text = uploaded_file.read().decode("utf-8-sig")
        reader = csv.DictReader(StringIO(text))
        for row in reader:
            yield {_normalize_header(key): value for key, value in row.items()}
        return

    if extension == ".xlsx":
        yield from _iter_xlsx_rows(uploaded_file)
        return

    raise ValueError("Only CSV and XLSX files are supported for bulk upload.")


def _iter_xlsx_rows(uploaded_file):
    workbook = zipfile.ZipFile(uploaded_file)
    shared_strings = []

    if "xl/sharedStrings.xml" in workbook.namelist():
        shared_root = ET.fromstring(workbook.read("xl/sharedStrings.xml"))
        for item in shared_root.findall("main:si", XLSX_NS):
            pieces = [node.text or "" for node in item.findall(".//main:t", XLSX_NS)]
            shared_strings.append("".join(pieces))

    sheet_path = "xl/worksheets/sheet1.xml"
    if sheet_path not in workbook.namelist():
        raise ValueError("The XLSX file does not contain a readable first sheet.")

    sheet_root = ET.fromstring(workbook.read(sheet_path))
    rows = []
    for row in sheet_root.findall(".//main:sheetData/main:row", XLSX_NS):
        row_data = {}
        for cell in row.findall("main:c", XLSX_NS):
            cell_ref = cell.attrib.get("r", "")
            column_letters = "".join(ch for ch in cell_ref if ch.isalpha())
            cell_type = cell.attrib.get("t")
            value_node = cell.find("main:v", XLSX_NS)
            if value_node is None:
                value = ""
            else:
                raw_value = value_node.text or ""
                if cell_type == "s":
                    value = shared_strings[int(raw_value)] if raw_value.isdigit() and int(raw_value) < len(shared_strings) else ""
                else:
                    value = raw_value
            row_data[column_letters] = value
        rows.append(row_data)

    if not rows:
        return

    headers = []
    header_row = rows[0]
    ordered_columns = sorted(header_row.keys(), key=lambda col: (len(col), col))
    for column in ordered_columns:
        headers.append(_normalize_header(header_row.get(column)))

    for row in rows[1:]:
        normalized = {}
        for index, column in enumerate(ordered_columns):
            if index >= len(headers) or not headers[index]:
                continue
            normalized[headers[index]] = row.get(column, "")
        if any(str(value).strip() for value in normalized.values()):
            yield normalized


def _bulk_create_products(uploaded_file):
    created_count = 0
    errors = []

    for row_index, row in enumerate(_iter_bulk_product_rows(uploaded_file), start=2):
        try:
            category = _category_from_text(row.get("category"))
            name = str(row.get("name", "")).strip()
            price = str(row.get("price", "")).strip()
            stock = str(row.get("stock", "")).strip() or "0"
            description = str(row.get("description", "")).strip()
            image_url = str(row.get("image_url", "")).strip()
            gallery_urls = _parse_gallery_url_text(row.get("gallery_image_urls", ""))

            if not all([name, price, image_url]):
                raise ValueError("Name, price, and image_url are required.")

            main_image = _download_image_from_url(image_url, name)
            _create_product_with_assets(
                category=category,
                name=name,
                price=price,
                stock=stock,
                description=description,
                main_image=main_image,
                gallery_urls=gallery_urls,
            )
            created_count += 1
        except Exception as exc:
            errors.append(f"Row {row_index}: {exc}")

    return created_count, errors


def home(request):
    query = request.GET.get("q")
    category_slug = request.GET.get("category", "").strip()
    banners = Banner.objects.filter(is_active=True)[:10]

    if query:
        products = Product.objects.filter(
            Q(name__icontains=query)
            | Q(description__icontains=query)
            | Q(category__name__icontains=query)
        )
        return render(
            request,
            "home.html",
            {
                "search_mode": True,
                "products": products,
                "query": query,
                "banners": banners,
            },
        )

    categories = Category.objects.all().order_by("name")
    products = Product.objects.select_related("category").order_by("-created_at")
    active_category = None

    if category_slug and category_slug != "all":
        active_category = get_object_or_404(Category, id=category_slug)
        products = products.filter(category=active_category)

    return render(
        request,
        "home.html",
        {
            "search_mode": False,
            "products": products,
            "banners": banners,
            "categories": categories,
            "active_category": active_category,
        },
    )


def _is_ajax_request(request):
    return request.headers.get("x-requested-with") == "XMLHttpRequest"


def _cart_summary_context(request):
    cart = request.session.get("cart", {})
    cart_count = sum(cart.values())
    total = 0

    if cart:
        products = Product.objects.filter(id__in=cart.keys())
        for product in products:
            total += product.price * cart.get(str(product.id), 0)

    delivery_option = request.session.get("delivery_option", "inside_dhaka")
    delivery_fee = 80 if delivery_option == "inside_dhaka" else 120
    grand_total = total + delivery_fee if cart_count else total

    return {
        "cart_count": cart_count,
        "cart_total": total,
        "delivery_option": delivery_option,
        "delivery_fee": delivery_fee,
        "grand_total": grand_total,
    }


def category_products(request, id):
    category = get_object_or_404(Category, id=id)
    products = Product.objects.filter(category=category)
    return render(
        request,
        "category_products.html",
        {
            "category": category,
            "products": products,
        },
    )


def product_detail(request, id):
    product = get_object_or_404(Product, id=id)
    related_products = (
        Product.objects.filter(category=product.category)
        .exclude(id=product.id)[:8]
    )
    return render(
        request,
        "product_detail.html",
        {
            "product": product,
            "related_products": related_products,
        },
    )


def add_to_cart(request, id):
    if not request.user.is_authenticated:
        return _auth_required_response(
            request,
            action_label="add this product to your cart",
            ajax=_is_ajax_request(request),
        )

    cart = request.session.get("cart", {})
    quantity = request.POST.get("quantity") or request.GET.get("quantity") or "1"
    try:
        quantity = max(1, int(quantity))
    except ValueError:
        quantity = 1
    cart[str(id)] = cart.get(str(id), 0) + quantity
    request.session["cart"] = cart
    request.session.modified = True

    if _is_ajax_request(request):
        summary = _cart_summary_context(request)
        return JsonResponse(
            {
                "ok": True,
                "message": "Product added to cart.",
                **summary,
            }
        )

    return redirect(request.META.get("HTTP_REFERER", "home"))


def buy_now(request, id):
    if not request.user.is_authenticated:
        return _auth_required_response(request, action_label="buy this product")

    product = get_object_or_404(Product, id=id)
    quantity = request.POST.get("quantity") or request.GET.get("quantity") or "1"
    try:
        quantity = max(1, int(quantity))
    except ValueError:
        quantity = 1
    request.session["cart"] = {str(product.id): quantity}
    request.session.modified = True
    return redirect("checkout")


def cart_view(request):
    if not request.user.is_authenticated:
        return _auth_required_response(request, action_label="view your cart")

    cart = request.session.get("cart", {})
    items = []
    total = 0
    delivery_option = request.session.get("delivery_option", "inside_dhaka")
    delivery_fee_map = {
        "inside_dhaka": 80,
        "outside_dhaka": 120,
    }

    for key, qty in cart.items():
        try:
            product = Product.objects.get(id=key)
        except Product.DoesNotExist:
            continue

        subtotal = product.price * qty
        total += subtotal
        items.append({"product": product, "qty": qty, "subtotal": subtotal})

    delivery_fee = delivery_fee_map.get(delivery_option, 80)
    grand_total = total + delivery_fee if items else total

    return render(
        request,
        "cart.html",
        {
            "items": items,
            "total": total,
            "delivery_option": delivery_option,
            "delivery_fee": delivery_fee,
            "grand_total": grand_total,
        },
    )


def _cart_page_context(request):
    cart = request.session.get("cart", {})
    items = []
    total = 0
    delivery_option = request.session.get("delivery_option", "inside_dhaka")
    delivery_fee_map = {"inside_dhaka": 80, "outside_dhaka": 120}

    for key, qty in cart.items():
        try:
            product = Product.objects.get(id=key)
        except Product.DoesNotExist:
            continue

        subtotal = product.price * qty
        total += subtotal
        items.append({"product": product, "qty": qty, "subtotal": subtotal})

    delivery_fee = delivery_fee_map.get(delivery_option, 80)
    grand_total = total + delivery_fee if items else total
    return {
        "items": items,
        "total": total,
        "delivery_option": delivery_option,
        "delivery_fee": delivery_fee,
        "grand_total": grand_total,
    }


def remove_from_cart(request, id):
    if not request.user.is_authenticated:
        return _auth_required_response(
            request,
            action_label="manage your cart",
            ajax=_is_ajax_request(request),
        )

    cart = request.session.get("cart", {})
    cart.pop(str(id), None)
    request.session["cart"] = cart
    request.session.modified = True

    if _is_ajax_request(request):
        summary = _cart_summary_context(request)
        return JsonResponse({"ok": True, **summary})

    return redirect("cart")


def update_cart_quantity(request, id):
    if not request.user.is_authenticated:
        return _auth_required_response(
            request,
            action_label="update your cart",
            ajax=_is_ajax_request(request),
        )

    if request.method != "POST":
        return redirect("cart")

    cart = request.session.get("cart", {})
    action = request.POST.get("action")
    quantity_value = request.POST.get("quantity")
    current_qty = cart.get(str(id), 1)

    if action == "increase":
        current_qty += 1
    elif action == "decrease":
        current_qty -= 1
    else:
        try:
            current_qty = int(quantity_value)
        except (TypeError, ValueError):
            current_qty = cart.get(str(id), 1)

    if current_qty <= 0:
        cart.pop(str(id), None)
    else:
        cart[str(id)] = current_qty

    request.session["cart"] = cart
    request.session.modified = True

    if _is_ajax_request(request):
        summary = _cart_summary_context(request)
        item_qty = cart.get(str(id), 0)
        item_subtotal = 0
        if item_qty:
            try:
                product = Product.objects.get(id=id)
                item_subtotal = float(product.price * item_qty)
            except Product.DoesNotExist:
                item_subtotal = 0
        return JsonResponse(
            {
                "ok": True,
                "item_qty": item_qty,
                "item_subtotal": item_subtotal,
                **summary,
            }
        )

    return redirect("cart")


def update_delivery_option(request):
    if not request.user.is_authenticated:
        return _auth_required_response(
            request,
            action_label="update delivery options",
            ajax=_is_ajax_request(request),
        )

    if request.method != "POST":
        return redirect("cart")

    delivery_option = request.POST.get("delivery_option", "inside_dhaka")
    if delivery_option not in {"inside_dhaka", "outside_dhaka"}:
        delivery_option = "inside_dhaka"

    request.session["delivery_option"] = delivery_option
    request.session.modified = True

    if _is_ajax_request(request):
        summary = _cart_summary_context(request)
        return JsonResponse({"ok": True, **summary})

    return redirect("cart")


def _build_cart_items(cart):
    products = Product.objects.filter(id__in=cart.keys())
    items = []
    total = 0

    for product in products:
        qty = cart.get(str(product.id), 0)
        subtotal = product.price * qty
        total += subtotal
        items.append(
            {
                "product": product,
                "qty": qty,
                "subtotal": subtotal,
            }
        )

    return items, total


def _store_checkout_data(request, name, email, phone, address):
    request.session["checkout_data"] = {
        "name": name,
        "email": email,
        "phone": phone,
        "address": address,
    }
    request.session.modified = True


def _get_checkout_data(request):
    return request.session.get("checkout_data", {})


def _create_order_from_session(request, status, payment_label, paid_online=False):
    cart = request.session.get("cart", {})
    checkout_data = _get_checkout_data(request)

    if not cart or not checkout_data:
        return None

    items, total = _build_cart_items(cart)
    order = Order.objects.create(
        user=request.user if request.user.is_authenticated else None,
        customer_name=checkout_data.get("name", "Guest"),
        email=checkout_data.get("email", "guest@example.com"),
        address=checkout_data.get("address", "N/A"),
        phone=checkout_data.get("phone", "0000000000"),
        total_price=total,
        status=status,
    )

    for item in items:
        OrderItem.objects.create(
            order=order,
            product_name=f"{item['product'].name} ({payment_label})",
            price=item["product"].price,
            quantity=item["qty"],
        )

    if request.user.is_authenticated:
        profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
        profile.phone = checkout_data.get("phone", "")
        profile.address = checkout_data.get("address", "")
        profile.save()

    request.session["cart"] = {}
    request.session["checkout_data"] = {}
    request.session["last_payment_method"] = payment_label
    request.session["last_payment_status"] = "Paid" if paid_online else "Pending Confirmation"
    request.session.modified = True
    return order


def checkout(request):
    if not request.user.is_authenticated:
        return _auth_required_response(request, action_label="continue to checkout")

    cart = request.session.get("cart", {})
    if not cart:
        return redirect("home")

    items, total = _build_cart_items(cart)
    initial_name = ""
    initial_email = ""
    initial_phone = ""
    initial_address = ""

    if request.user.is_authenticated:
        profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
        full_name = f"{request.user.first_name} {request.user.last_name}".strip()
        initial_name = full_name or request.user.username
        initial_email = request.user.email
        initial_phone = profile.phone
        initial_address = profile.address

    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        address = request.POST.get("address", "").strip()

        if not all([name, email, phone, address]):
            messages.error(request, "Please fill in all fields.")
            return render(
                request,
                "checkout.html",
                {
                    "items": items,
                    "total": total,
                    "initial_name": name,
                    "initial_email": email,
                    "initial_phone": phone,
                    "initial_address": address,
                },
            )
        _store_checkout_data(request, name, email, phone, address)
        return redirect("payment")

    return render(
        request,
        "checkout.html",
        {
            "items": items,
            "total": total,
            "initial_name": initial_name,
            "initial_email": initial_email,
            "initial_phone": initial_phone,
            "initial_address": initial_address,
        },
    )


def success(request):
    return render(
        request,
        "success.html",
        {
            "payment_method": request.session.get("last_payment_method", "Selected Method"),
            "payment_status": request.session.get("last_payment_status", "Completed"),
        },
    )


def live_search(request):
    q = request.GET.get("q", "")
    products = Product.objects.filter(name__icontains=q)[:8]

    data = []
    for product in products:
        data.append(
            {
                "id": product.id,
                "name": product.name,
                "price": str(product.price),
                "image": product.image.url if product.image else "",
            }
        )

    return JsonResponse(data, safe=False)


def payment_page(request):
    if not request.user.is_authenticated:
        return _auth_required_response(request, action_label="continue to payment")

    cart = request.session.get("cart", {})
    if not cart:
        return redirect("home")

    checkout_data = _get_checkout_data(request)
    if not checkout_data:
        messages.error(request, "Please complete your checkout details first.")
        return redirect("checkout")

    items, total = _build_cart_items(cart)
    if request.method == "POST":
        method = request.POST.get("method")
        if method == "bkash":
            return redirect("bkash_payment")
        if method == "nagad":
            return redirect("nagad_payment")
        if method == "card":
            return redirect("sslcommerz_payment")

        messages.error(request, "Please select a payment method.")

    return render(
        request,
        "payment.html",
        {
            "items": items,
            "total": total,
            "checkout_data": checkout_data,
        },
    )


def auth_required(request):
    next_url = request.GET.get("next", "")
    action = request.GET.get("action", "continue")
    return render(
        request,
        "auth_required.html",
        {
            "next_url": next_url,
            "action": action,
        },
    )


def payment_success(request):
    order = _create_order_from_session(
        request,
        status="paid",
        payment_label="Card / SSLCommerz",
        paid_online=True,
    )
    if not order:
        return redirect("home")
    return redirect("success")


def bkash_payment(request):
    cart = request.session.get("cart", {})
    checkout_data = _get_checkout_data(request)
    if not cart or not checkout_data:
        return redirect("checkout")

    items, total = _build_cart_items(cart)
    if request.method == "POST":
        transaction_id = request.POST.get("transaction_id", "").strip()
        sender_number = request.POST.get("sender_number", "").strip()
        if not transaction_id or not sender_number:
            messages.error(request, "Please enter your bKash number and transaction ID.")
        else:
            order = _create_order_from_session(
                request,
                status="paid",
                payment_label="bKash",
                paid_online=True,
            )
            if order:
                return redirect("success")

    return render(
        request,
        "bkash_payment.html",
        {"items": items, "total": total, "checkout_data": checkout_data},
    )


def nagad_payment(request):
    cart = request.session.get("cart", {})
    checkout_data = _get_checkout_data(request)
    if not cart or not checkout_data:
        return redirect("checkout")

    items, total = _build_cart_items(cart)
    if request.method == "POST":
        transaction_id = request.POST.get("transaction_id", "").strip()
        sender_number = request.POST.get("sender_number", "").strip()
        if not transaction_id or not sender_number:
            messages.error(request, "Please enter your Nagad number and transaction ID.")
        else:
            order = _create_order_from_session(
                request,
                status="paid",
                payment_label="Nagad",
                paid_online=True,
            )
            if order:
                return redirect("success")

    return render(
        request,
        "nagad_payment.html",
        {"items": items, "total": total, "checkout_data": checkout_data},
    )


def sslcommerz_payment(request):
    cart = request.session.get("cart", {})
    checkout_data = _get_checkout_data(request)
    if not cart or not checkout_data:
        return redirect("checkout")

    items, total = _build_cart_items(cart)
    if request.method == "POST":
        card_number = request.POST.get("card_number", "").strip()
        expiry = request.POST.get("expiry", "").strip()
        cvv = request.POST.get("cvv", "").strip()
        if not card_number or not expiry or not cvv:
            messages.error(request, "Please enter card number, expiry date, and CVV.")
        else:
            return redirect("payment_success")

    return render(
        request,
        "sslcommerz_payment.html",
        {"items": items, "total": total, "checkout_data": checkout_data},
    )


def order_success(request):
    return render(request, "success.html")


def _update_customer_profile(request, profile):
    if request.method != "POST":
        return None

    username = request.POST.get("username", "").strip() or request.user.username
    email = request.POST.get("email", "").strip()

    if User.objects.exclude(id=request.user.id).filter(username=username).exists():
        messages.error(request, "This username is already in use.")
        return False

    if email and User.objects.exclude(id=request.user.id).filter(email=email).exists():
        messages.error(request, "This email is already in use.")
        return False

    request.user.first_name = request.POST.get("first_name", "").strip()
    request.user.last_name = request.POST.get("last_name", "").strip()
    request.user.email = email
    request.user.username = username
    request.user.save()

    profile.phone = request.POST.get("phone", "").strip()
    profile.address = request.POST.get("address", "").strip()
    profile.gender = request.POST.get("gender", "male")
    if request.FILES.get("profile_image"):
        profile.profile_image = request.FILES["profile_image"]
    profile.save()

    messages.success(request, "Account settings and profile updated!")
    return True


def _attach_order_steps(orders):
    for order in orders:
        current_step = STATUS_STEPS.get(order.status, 1)
        order.status_steps = [
            {"label": "Pending", "done": current_step >= 1, "active": order.status == "pending"},
            {"label": "Approved", "done": current_step >= 2, "active": order.status == "approved"},
            {"label": "Paid", "done": current_step >= 3, "active": order.status == "paid"},
            {"label": "Processing", "done": current_step >= 4, "active": order.status == "processing"},
            {"label": "Packed", "done": current_step >= 5, "active": order.status == "packed"},
            {"label": "Shipped", "done": current_step >= 6, "active": order.status == "shipped"},
            {"label": "Out for Delivery", "done": current_step >= 7, "active": order.status == "out_for_delivery"},
            {"label": "Delivered", "done": current_step >= 8, "active": order.status == "delivered"},
        ]


@login_required
def customer_dashboard(request):
    orders = (
        Order.objects.filter(user=request.user)
        .prefetch_related("items")
        .order_by("-created_at")
    )
    _attach_order_steps(orders)

    total_orders = orders.count()
    total_spent = orders.aggregate(total=Sum("total_price"))["total"] or 0
    latest_order = orders.first()

    return render(
        request,
        "customer_orders.html",
        {
            "profile": CustomerProfile.objects.get_or_create(user=request.user)[0],
            "orders": orders,
            "total_orders": total_orders,
            "total_spent": total_spent,
            "latest_order": latest_order,
        },
    )


@login_required
def customer_account(request):
    profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
    updated = _update_customer_profile(request, profile)
    if updated:
        return redirect("customer_account")

    return render(request, "customer_account.html", {"profile": profile})


@login_required
def customer_cart_panel(request):
    profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
    context = _cart_page_context(request)
    context["profile"] = profile
    return render(request, "customer_cart_panel.html", context)


def _is_staff_user(user):
    return user.is_staff or user.is_superuser


@login_required
@user_passes_test(_is_staff_user)
def staff_account(request):
    profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
    updated = _update_customer_profile(request, profile)
    if updated:
        return redirect("staff_account")

    return render(request, "staff_account.html", {"profile": profile})


@login_required
@user_passes_test(_is_staff_user)
def staff_add_product(request):
    categories = Category.objects.all().order_by("name")

    if request.method == "POST":
        form_type = request.POST.get("form_type", "single").strip()

        if form_type == "bulk":
            bulk_file = request.FILES.get("bulk_file")
            if not bulk_file:
                messages.error(request, "Please choose a CSV or XLSX file for bulk upload.")
            else:
                try:
                    created_count, errors = _bulk_create_products(bulk_file)
                    if created_count:
                        messages.success(request, f"{created_count} product(s) were added successfully.")
                    if errors:
                        for error in errors[:8]:
                            messages.error(request, error)
                        if len(errors) > 8:
                            messages.error(request, f"{len(errors) - 8} more row error(s) were skipped.")
                    if created_count and not errors:
                        return redirect("staff_add_product")
                except Exception as exc:
                    messages.error(request, f"Bulk upload failed: {exc}")

            return render(request, "staff_add_product.html", {"categories": categories})

        category_id = request.POST.get("category")
        name = request.POST.get("name", "").strip()
        price = request.POST.get("price", "").strip()
        stock = request.POST.get("stock", "").strip() or "0"
        description = request.POST.get("description", "").strip()
        image = request.FILES.get("image")
        image_url = request.POST.get("image_url", "").strip()
        gallery_images = request.FILES.getlist("gallery_images")
        gallery_urls = _parse_gallery_url_text(request.POST.get("gallery_image_urls", ""))

        if not all([category_id, name, price]):
            messages.error(request, "Category, product name, and price are required.")
        else:
            try:
                main_image = _resolve_product_image(image, image_url, name)
                if not main_image:
                    messages.error(request, "Please upload a main image or provide a valid image link.")
                else:
                    category = get_object_or_404(Category, id=category_id)
                    _create_product_with_assets(
                        category=category,
                        name=name,
                        price=price,
                        stock=stock,
                        description=description,
                        main_image=main_image,
                        gallery_images=gallery_images,
                        gallery_urls=gallery_urls,
                    )
                    messages.success(request, "Product added successfully.")
                    return redirect("staff_add_product")
            except Exception as exc:
                messages.error(request, f"Product could not be added: {exc}")

    return render(request, "staff_add_product.html", {"categories": categories})


@login_required
@user_passes_test(_is_staff_user)
def staff_dashboard(request):
    orders = Order.objects.prefetch_related("items", "user").order_by("-created_at")
    selected_date = request.GET.get("date", "").strip()
    start_date = request.GET.get("start_date", "").strip()
    end_date = request.GET.get("end_date", "").strip()

    if selected_date:
        orders = orders.filter(created_at__date=selected_date)
    else:
        if start_date:
            orders = orders.filter(created_at__date__gte=start_date)
        if end_date:
            orders = orders.filter(created_at__date__lte=end_date)

    total_orders = orders.count()
    total_customers = (
        orders.exclude(email="")
        .values("email")
        .distinct()
        .count()
    )
    confirmed_orders = orders.filter(status="approved").count()
    cancelled_orders = orders.filter(status="cancelled").count()
    delivered_orders = orders.filter(status="delivered").count()
    today_orders = Order.objects.filter(created_at__date=timezone.localdate()).count()
    total_revenue = orders.aggregate(total=Sum("total_price"))["total"] or 0

    order_rows = []
    for order in orders:
        product_details = ", ".join(
            f"{item.product_name} x {item.quantity}" for item in order.items.all()
        )
        total_quantity = sum(item.quantity for item in order.items.all())
        order_rows.append(
            {
                "id": order.id,
                "created_at": order.created_at,
                "customer_name": order.customer_name,
                "email": order.email,
                "phone": order.phone,
                "address": order.address,
                "product_details": product_details,
                "quantity": total_quantity,
                "total_price": order.total_price,
                "status": order.status,
                "status_label": order.get_status_display(),
            }
        )

    return render(
        request,
        "staff_dashboard.html",
        {
            "orders": order_rows,
            "total_orders": total_orders,
            "total_customers": total_customers,
            "confirmed_orders": confirmed_orders,
            "cancelled_orders": cancelled_orders,
            "delivered_orders": delivered_orders,
            "today_orders": today_orders,
            "total_revenue": total_revenue,
            "selected_date": selected_date,
            "start_date": start_date,
            "end_date": end_date,
        },
    )


@login_required
@user_passes_test(_is_staff_user)
def update_order_status(request, order_id):
    if request.method != "POST":
        return redirect("staff_dashboard")

    order = get_object_or_404(Order, id=order_id)
    new_status = request.POST.get("status", "").strip()
    valid_statuses = {choice[0] for choice in Order.STATUS_CHOICES}

    if new_status not in valid_statuses:
        if request.headers.get("x-requested-with") == "XMLHttpRequest":
            return JsonResponse({"ok": False, "message": "Invalid order status selected."}, status=400)
        messages.error(request, "Invalid order status selected.")
        return redirect("staff_dashboard")

    order.status = new_status
    order.save(update_fields=["status"])

    if request.headers.get("x-requested-with") == "XMLHttpRequest":
        return JsonResponse(
            {
                "ok": True,
                "order_id": order.id,
                "status": order.status,
                "status_label": order.get_status_display(),
                "message": f"Order #{order.id} updated to {order.get_status_display()}.",
            }
        )

    messages.success(request, f"Order #{order.id} status updated to {order.get_status_display()}.")
    return redirect("staff_dashboard")


def registerPage(request):
    if request.user.is_authenticated:
        if request.user.is_staff or request.user.is_superuser:
            return redirect("staff_dashboard")
        return redirect("customer_dashboard")

    if request.method == "POST":
        next_url = request.POST.get("next", "").strip()
        full_name = request.POST.get("full_name", "").strip()
        email = request.POST.get("email", "").strip().lower()
        password = request.POST.get("password", "")
        confirm_password = request.POST.get("confirm_password", "")

        if not all([full_name, email, password, confirm_password]):
            messages.error(request, "All registration fields are required.")
            return render(request, "auth.html", {"auth_mode": "register", "next_url": next_url})

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return render(request, "auth.html", {"auth_mode": "register", "next_url": next_url})

        if User.objects.filter(email__iexact=email).exists():
            messages.error(request, "An account with this email already exists.")
            return render(request, "auth.html", {"auth_mode": "register", "next_url": next_url})

        first_name, _, last_name = full_name.partition(" ")
        username = email

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
        )
        CustomerProfile.objects.get_or_create(user=user)
        messages.success(request, "Account created successfully. Please sign in.")
        if next_url.startswith("/"):
            return redirect(f"{reverse('login')}?next={next_url}")
        return redirect("login")

    return render(request, "auth.html", {"auth_mode": "register", "next_url": request.GET.get("next", "")})


def loginPage(request):
    if request.user.is_authenticated:
        if request.user.is_staff or request.user.is_superuser:
            return redirect("staff_dashboard")
        return redirect("customer_dashboard")

    if request.method == "POST":
        next_url = request.POST.get("next", "").strip()
        identifier = request.POST.get("login_identifier", "").strip()
        password = request.POST.get("password", "")

        username = identifier
        matched_user = (
            User.objects.filter(email__iexact=identifier).only("username").first()
        )
        if matched_user:
            username = matched_user.username

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            if next_url.startswith("/"):
                return redirect(next_url)
            if user.is_staff or user.is_superuser:
                return redirect("staff_dashboard")
            return redirect("customer_dashboard")

        messages.error(request, "Invalid email/username or password.")
        return render(request, "auth.html", {"auth_mode": "login", "next_url": next_url})

    return render(request, "auth.html", {"auth_mode": "login", "next_url": request.GET.get("next", "")})


def logoutUser(request):
    logout(request)
    return redirect("login")
