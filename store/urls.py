from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('product/<int:id>/', views.product_detail, name='product_detail'),
    path('cart/', views.cart_view, name='cart'),
    path('add-to-cart/<int:id>/', views.add_to_cart, name='add_to_cart'),
    path('buy-now/<int:id>/', views.buy_now, name='buy_now'),
    path('update-cart/<int:id>/', views.update_cart_quantity, name='update_cart_quantity'),
    path('update-delivery-option/', views.update_delivery_option, name='update_delivery_option'),
    path('remove/<int:id>/', views.remove_from_cart, name='remove_from_cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('success/', views.success, name='success'),
    path('category/<int:id>/', views.category_products, name='category_products'),
    path('live-search/', views.live_search, name='live_search'),
    path('payment/', views.payment_page, name='payment'),
    path('payment/bkash/', views.bkash_payment, name='bkash_payment'),
    path('payment/nagad/', views.nagad_payment, name='nagad_payment'),
    path('payment/sslcommerz/', views.sslcommerz_payment, name='sslcommerz_payment'),
    path('payment/success/', views.payment_success, name='payment_success'),
    path('order-success/', views.order_success, name='order_success'),
    path('dashboard/', views.customer_dashboard, name='customer_dashboard'),
    path('account/', views.customer_account, name='customer_account'),
    path('dashboard/cart/', views.customer_cart_panel, name='customer_cart_panel'),
    path('staff-dashboard/', views.staff_dashboard, name='staff_dashboard'),
    path('staff-dashboard/account/', views.staff_account, name='staff_account'),
    path('staff-dashboard/products/add/', views.staff_add_product, name='staff_add_product'),
    path('staff-dashboard/order/<int:order_id>/status/', views.update_order_status, name='update_order_status'),
    path('auth-required/', views.auth_required, name='auth_required'),
    path('login/', views.loginPage, name="login"),
    path('register/', views.registerPage, name="register"),
    path('logout/', views.logoutUser, name="logout"),
    

]

from django.contrib.auth import views as auth_views

urlpatterns += [
    path('reset_password/', auth_views.PasswordResetView.as_view(template_name="password_reset.html"), name="password_reset"),
    path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(template_name="password_reset_done.html"), name="password_reset_done"),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="password_reset_confirm.html"), name="password_reset_confirm"),
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(template_name="password_reset_complete.html"), name="password_reset_complete"),
]
