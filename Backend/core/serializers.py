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
    # password = serializers.CharField(write_only=True)
    #
    # def create(self, validated_data):
    #     user = Customer.objects.create_user(**validated_data)
    #     return user
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


# class RegisterSerializer(ModelSerializer):
#     password = serializers.CharField(
#         write_only=True, required=True, validators=[validate_password])
#     password2 = serializers.CharField(write_only=True, required=True)
#     email = serializers.EmailField(
#         required=True,
#         validators=[UniqueValidator(queryset=CustomUser.objects.all())]
#     )
#
#     class Meta:
#         model = CustomUser
#         fields = ('username', 'email', 'password', 'password2', 'bio', 'cover_photo')
#
#     def validate(self, attrs):
#         if attrs['password'] != attrs['password2']:
#             raise serializers.ValidationError(
#                 {"password": "Password fields didn't match."})
#
#         return attrs
#
#     def create(self, validated_data):
#         user = CustomUser.objects.create(
#             username=validated_data['username'],
#             email=validated_data['email'],
#             bio=validated_data['bio'],
#             cover_photo=validated_data['cover_photo']
#         )
#
#         user.set_password(validated_data['password'])
#         user.save()
#
#         return user


# class CustomerSerializer(ModelSerializer):
#     class Meta:
#         model = Customer
#         fields = '__all__'



