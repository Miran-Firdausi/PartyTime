from django.urls import path
from . import views

urlpatterns = [
    path('cart/', views.get_cart, name='cart'),
    path('cart/add/', views.add_to_cart, name='add_to_cart'),
    path('orders/', views.get_orders, name="get_orders"),
    path('orders/add/', views.make_order, name='make_order'),
]