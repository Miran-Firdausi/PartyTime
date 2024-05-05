from rest_framework.serializers import ModelSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers

from .models import Customer, Seller, User, Shop


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['email'] = user.email

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        # Include user details in the response data
        user = self.user
        user_data = {
            'id': user.id,
            'email': user.email,
            'phone': user.phone,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'date_joined': user.date_joined.strftime('%Y-%m-%d %H:%M:%S'),
        }
        data['user'] = user_data

        return data


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'phone', 'password', 'first_name', 'last_name']
        extra_kwargs = {'first_name': {'required': True}, 'last_name': {'required': True}}


class CustomerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Customer
        fields = ['id', 'user']


class SellerSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Seller
        fields = ['id', 'user', 'aadhar_number', 'license_number', 'seller_upi']


class ShopSerializer(serializers.ModelSerializer):
    owner = SellerSerializer(read_only=True)

    class Meta:
        model = Shop
        fields = ['id', 'owner']