from django.shortcuts import render
from rest_framework import status
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Products
from .serializers import ProductsSerializer


def index(request):
    message = {
        'message': 'Django is working correctly',
    }
    return JsonResponse(message)


#@api_view(['GET'])
def getProducts(request):
    products = Products.objects.all()  # Query all products
    serializer = ProductsSerializer(products, many=True)  # Serialize the products
    return JsonResponse(serializer.data,safe=False)  # Ret

@api_view(['POST'])
def add_product(request):
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
