from rest_framework import serializers
from .models import Cart, CartItem, Order, OrderItems
from store.serializers import ProductSerializer
from core.serializers import CustomerSerializer, SellerSerializer

class CartItemsSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'quantity_buying']

class CartSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer()
    items_in_cart = CartItemsSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = ['cart_id', 'customer', 'items_in_cart', 'total_price', 'total_items']

class OrderItemsSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = OrderItems
        fields = ['id', 'product', 'quantity_bought', 'subtotal']

class OrderSerializer(serializers.ModelSerializer):
    user = CustomerSerializer()
    seller = SellerSerializer()
    items_in_order = OrderItemsSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['order_id', 'user', 'seller', 'order_total', 'items_in_order', 'transaction_id', 'paid_to_upi', 'transaction_amount', 'transaction_status', 'transaction_timestamp', 'payment_gateway_response', 'created_at', 'updated_at']
