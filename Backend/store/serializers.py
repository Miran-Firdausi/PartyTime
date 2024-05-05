from rest_framework import serializers
from .models import Product, Category, ProductSeller
from core.serializers import SellerSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'description', 'category_image']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    product_image = serializers.ImageField(use_url=True)

    class Meta:
        model = Product
        fields = '__all__'


class ProductSellerSerializer(serializers.ModelSerializer):
    seller_name = serializers.SerializerMethodField()
    seller = SellerSerializer()
    
    class Meta:
        model = ProductSeller
        fields = ['id', 'quantity', 'expiry_date', 'expiry_image', 'seller_name', 'seller']

    def get_seller_name(self, obj):
        return obj.seller.user.first_name
