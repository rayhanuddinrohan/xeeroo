from django.contrib import admin
from .models import Banner, Category, CustomerProfile, Order, OrderItem, Product, ProductImage



class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline]


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    readonly_fields = ("product_name", "price", "quantity")


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "customer_name",
        "email",
        "phone",
        "total_price",
        "status",
        "created_at",
    )
    search_fields = ("customer_name", "email", "phone")
    list_filter = ("status", "created_at")
    inlines = [OrderItemInline]


@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "display_order", "is_active", "created_at")
    list_editable = ("display_order", "is_active")
    search_fields = ("title", "subtitle")
    list_filter = ("is_active", "created_at")


# REGISTER MODELS
admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(CustomerProfile)
admin.site.register(Order, OrderAdmin)
