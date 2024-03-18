from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer


def index(request):
    message = {
        'message': 'Django is working correctly',
    }
    return JsonResponse(message)


#@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()  # Query all products
    serializer = ProductSerializer(products, many=True)  # Serialize the products
    return JsonResponse(serializer.data,safe=False)  # Ret
