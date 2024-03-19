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

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'phone', 'password']

    objects = UserManager()

    def __str__(self):
        return self.email


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    objects = CustomerManager()


class Seller(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    aadhar_number = models.CharField(max_length=12, unique=True)
    license_number = models.CharField(max_length=12, unique=True)


# class Admin(AbstractUser):
#     first_name = models.CharField(max_length=30)
#     last_name = models.CharField(max_length=30)
#     email = models.EmailField(max_length=255, unique=True)
#
#     # objects = SellerManager()
#
#     def __str__(self):
#         return self.email
