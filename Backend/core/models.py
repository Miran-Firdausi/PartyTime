from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

from .managers import UserManager, CustomerManager, SellerManager


class User(AbstractUser):
    username = None
    email = models.EmailField(max_length=255, unique=True, null=False)
    phone = models.CharField(max_length=15, unique=True, null=False)
    date_joined = models.DateTimeField(default=timezone.now)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_seller = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone', 'password']

    objects = UserManager()

    def __str__(self):
        return self.email


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    objects = CustomerManager()

    def __str__(self):
        return self.user.first_name


class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    objects = SellerManager()

    aadhar_number = models.CharField(max_length=12, unique=True)
    license_number = models.CharField(max_length=20, unique=True)
    seller_upi = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.user.first_name


class Shop(models.Model):
    owner = models.OneToOneField(Seller, on_delete=models.CASCADE, related_name='shops')
    address_line_1 = models.CharField(max_length=255)
    address_line_2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    closing_time = models.TimeField(null=True, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)

    def __str__(self):
        return self.owner.user.first_name