from django.urls import path
from . import views
from .views import add_product

urlpatterns = [
    path('', views.index, name="index"),
    path('getProducts/',views.getProducts, name="get_products"),
    path('api/add-product/', add_product, name='add-product'),
]


