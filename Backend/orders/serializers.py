from rest_framework import serializers
from .models import Cart, CartItem, Order, OrderItem
from store.serializers import ProductSerializer
from core.serializers import CustomerSerializer, SellerSerializer

class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = CartItem
        fields = ['id', 'product']

class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    items_in_cart = CartItemSerializer(source='cart_items', many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['cart_id', 'customer', 'items_in_cart', 'total_amount', 'total_items']

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'total_quantity', 'total_amount']

class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    seller = SellerSerializer()
    items_in_order = OrderItemSerializer(source='order_items', many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['order_id', 'customer', 'seller', 'total_amount', 'items_in_order', 'transaction_id', 'transaction_amount', 'transaction_status', 'transaction_timestamp', 'payment_gateway_response', 'created_at']
