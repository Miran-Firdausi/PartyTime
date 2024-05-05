from django.shortcuts import render, get_object_or_404
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, ProductSeller
from .serializers import ProductSerializer, ProductSellerSerializer


def index(request):
    message = {
        'message': 'Django is working correctly',
    }
    return JsonResponse(message)


@api_view(['GET'])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['POST', 'GET'])
def add_product(request):
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response()


@api_view(['GET'])
def get_product_sellers(request, product_id):
    product = get_object_or_404(Product, id=product_id)

    product_serializer = ProductSerializer(product)
    product_data = product_serializer.data

    product_sellers = ProductSeller.objects.filter(product=product)
    seller_data = []
    for seller in product_sellers:
        seller_serializer = ProductSellerSerializer(seller)
        seller_data.append({
            **seller_serializer.data,
            'discountedPrice': seller.discountedPrice
        })

    product_data['sellers'] = seller_data

    return Response(product_data)


