from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Cart, CartItem, Order, OrderItem
from .serializers import CartSerializer, CartItemSerializer, OrderSerializer, OrderItemSerializer
from django.shortcuts import get_object_or_404
from store.models import Product
from core.models import Customer, Seller


@api_view(['GET'])
def get_cart(request):
    if request.method == 'GET':
        user = request.user
        customer = get_object_or_404(Customer, user=user)
        cart = get_object_or_404(Cart, customer=customer)

        serializer = CartSerializer(cart)
        return Response(serializer.data)


@api_view(['POST','GET'])
def add_to_cart(request):
    if request.method == 'POST':
        user = request.user
        customer = get_object_or_404(Customer, user=user)
        items = request.data.get('items')

        # Retrieve or create cart for the user
        cart, _ = Cart.objects.get_or_create(customer=customer)
        cart.total_amount = request.data.get('total_amount')
        cart.total_items = request.data.get('total_items')
        cart.save()
        for item in items:
            product_id = item.get('product').get('id')
            product = get_object_or_404(Product, id=product_id)
            product_quantity = item.get('quantity')
            cart_item, created = CartItem.objects.get_or_create(
                cart=cart,
                product=product,
                defaults={'product_quantity': product_quantity}
            )

            if not created:
                cart_item.product_quantity = product_quantity
            cart_item.save()

        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response()


@api_view(['POST', 'GET'])
def make_order(request):
    if request.method == 'POST':
        user = request.user
        customer = get_object_or_404(Customer, user=user)
        cart = get_object_or_404(Cart, customer=customer)
        seller_id = request.data.get('seller_id')
        seller = get_object_or_404(Seller, id=seller_id)

        # Create the Order instance
        order = Order.objects.create(
            customer=customer,
            seller=seller,
            total_amount=request.data.get('total_amount'),
            transaction_id=request.data.get('transaction_id'),
            transaction_amount=request.data.get('transaction_amount'),
            transaction_status=request.data.get('transaction_status'),
            transaction_timestamp=request.data.get('transaction_timestamp'),
            payment_gateway_response=request.data.get('gateway_response')
        )

        # Create OrderItem instances for each item in the cart
        order_items = []
        for cart_item in cart.cart_items.all():
            order_item = OrderItem.objects.create(
                order=order,
                product=cart_item.product,
                total_quantity=cart_item.product_quantity
            )
            order_items.append(order_item)

        # Clear the cart
        cart.cart_items.all().delete()
        cart.total_amount = 0
        cart.total_items = 0
        cart.save()

        # Serialize the order and order items
        serializer = OrderSerializer(order)
        order_item_serializers = [OrderItemSerializer(item) for item in order_items]


        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response()


@api_view(['GET'])
def get_orders(request):
    return Response()
