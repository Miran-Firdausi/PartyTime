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
def product_detail_view(request):
    products = Product.objects.all()
    product_data = []

    for product in products:
        product_serializer = ProductSerializer(product)
        serialized_product = product_serializer.data

        product_sellers = ProductSeller.objects.filter(product=product)
        seller_data = []
        for seller in product_sellers:
            seller_serializer = ProductSellerSerializer(seller)
            seller_data.append({
                **seller_serializer.data,
                'discountedPrice': seller.discountedPrice
            })

        serialized_product['sellers'] = seller_data
        product_data.append(serialized_product)

    return Response(product_data)


@api_view(['GET'])
def product_search_view(request):
    search_query = request.query_params.get('query', '')
    if not search_query:
        return Response({"error": "Query parameter 'query' is required"}, status=400)

    # Perform case-insensitive search for products containing the search query in their name
    products = Product.objects.filter(name__icontains=search_query)
    product_serializer = ProductSerializer(products, many=True)
    return Response(product_serializer.data)
