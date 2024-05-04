from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('products/',views.get_products, name="get_products"),
    path('products/add/', views.add_product, name='add_product'),
]
