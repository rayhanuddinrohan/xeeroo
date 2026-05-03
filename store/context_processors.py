from .models import CustomerProfile


def cart_count(request):
    cart = request.session.get("cart", {})
    return {"cart_count": sum(cart.values())}


def navbar_profile(request):
    if not request.user.is_authenticated:
        return {}

    profile, _ = CustomerProfile.objects.get_or_create(user=request.user)
    context = {"user_profile": profile}
    if not request.user.is_staff and not request.user.is_superuser:
        context["navbar_profile"] = profile
    return context
