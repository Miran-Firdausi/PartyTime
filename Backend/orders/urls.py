from django.urls import path
from . import views

urlpatterns = [
    path('cart/', views.get_cart, name='cart'),
    path('cart/add/', views.add_to_cart_view, name='add_to_cart'),
]