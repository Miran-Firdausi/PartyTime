from django.contrib import admin
from .models import Product, Category, ProductSeller

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(ProductSeller)