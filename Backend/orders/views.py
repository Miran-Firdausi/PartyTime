

# Create your views here.
# urls.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Cart, CartItem
from .serializers import CartSerializer, CartItemsSerializer
from django.shortcuts import get_object_or_404
from store.models import Product
from core.models import Customer
@api_view(['GET'])
def get_cart(request):
    if request.method == 'GET':
        user = request.user  # Assuming user is authenticated
        cart, _ = Cart.objects.get_or_create(user=user)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

@api_view(['POST','GET'])
def add_to_cart_view(request):
    if request.method == 'POST':
        user = request.user
        customer = get_object_or_404(Customer, user=user)
        items = request.data.get('items')

        # Retrieve or create cart for the user
        cart, _ = Cart.objects.get_or_create(customer=customer)
        cart.total_price = request.data.get('total_price')
        cart.total_items = request.data.get('total_items')

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
