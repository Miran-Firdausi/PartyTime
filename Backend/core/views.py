from django.http import JsonResponse, HttpRequest
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.middleware.csrf import get_token
from rest_framework.permissions import IsAuthenticated

from .models import Customer, User, Seller
from .serializers import CustomerSerializer, UserSerializer, SellerSerializer, MyTokenObtainPairSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST', 'GET'])
def customer_register(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        customer_serializer = CustomerSerializer(data=request.data)

        if user_serializer.is_valid():
            try:
                user_data = user_serializer.validated_data
                user = User.objects.create_user(**user_data)
                user.is_customer = True
                customer = Customer.objects.create(user=user)

                return Response({
                    'user': user_serializer.data
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            errors = {}
            if not user_serializer.is_valid():
                errors.update(user_serializer.errors)
            if not customer_serializer.is_valid():
                errors.update(customer_serializer.errors)
            return Response({"error":  errors}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response()


@api_view(['POST', 'GET'])
def seller_register(request):
    if request.method == 'POST':
        user_serializer = UserSerializer(data=request.data)
        seller_serializer = SellerSerializer(data=request.data)

        email = request.data.get('email')
        existing_user = User.objects.filter(email=email).first()

        if existing_user:
            if hasattr(existing_user, 'seller'):
                return Response({'message': 'User already registered as a seller'}, status=400)
            else:
                return Response({'message': 'User is already registered as a Customer'}, status=400)
        else:
            if user_serializer.is_valid():
                aadhar_number = request.data.pop('aadhar_number')
                license_number = request.data.pop('license_number')
                seller_upi = request.data.pop('seller_upi')
                user_data = request.data
                user = User.objects.create_user(**user_data)
                user.is_customer = True
                user.is_seller = True
                Customer.objects.create(user=user)
                Seller.objects.create(user=user, aadhar_number=aadhar_number, license_number=license_number, seller_upi=seller_upi)
                return Response(user_serializer.data, status=201)
            else:
                errors = {}
                if not user_serializer.is_valid():
                    errors.update(user_serializer.errors)
                if not seller_serializer.is_valid():
                    errors.update(seller_serializer.errors)
                return Response({"error": errors}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response()
        

@api_view(['GET', 'POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
def customer_login(request):
    if request.method == 'POST':
        if 'email' in request.data and 'password' in request.data:
            email = request.data.get('email')
            password = request.data.get('password')
            user = authenticate(email=email, password=password)
            if user:
                auth_login(request, user)
                user_data = {
                    'id': user.id,
                    'email': user.email,
                    'phone': user.phone,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'date_joined': user.date_joined.strftime('%Y-%m-%d %H:%M:%S'),  # Convert datetime to string
                }
                return Response({'message': 'Login successful', 'user': user_data}, status=200)
            return Response({'message': 'Invalid credentials', 'email': email}, status=401)
        else:
            return Response({'message': 'email and password are required'})
    return Response()


@api_view(['POST', 'GET'])
def seller_login(request):
    if request.method == 'POST':
        if 'email' in request.data and 'password' in request.data:
            email = request.data.get('email')
            password = request.data.get('password')
            user = authenticate(email=email, password=password)
            if user:
                auth_login(request, user)
                return Response({'message': 'Login successful', 'user': user.email}, status=200)
            return Response({'message': 'Invalid credentials', 'email': email}, status=401)
        else:
            return Response({'message': 'email and password are required'})
    return Response()


@api_view(['POST', 'GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    auth_logout(request)
    return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)


def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})


# @api_view(['POST'])
# def register_customer(request):
#     if request.method == 'POST':
#         serializer = CustomerSerializer(data=request.data)
#         if serializer.is_valid():
#             user_data = {
#                 'email': request.data.get('email'),
#                 'password': request.data.get('password'),
#                 'first_name': request.data.get('first_name'),
#                 'last_name': request.data.get('last_name')
#             }
#             user = User.objects.create_user(**user_data)
#             serializer.save(user=user)
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)