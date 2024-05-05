from rest_framework import serializers
from .models import Product, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description', 'category_image']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    product_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Product
        fields = ('id', 'name', 'originalPrice', 'category', 'product_image', 'expiry_image', 'weight', 'volume', 'expiry_date', 'seller_id', 'quantity', 'discountedPrice')

