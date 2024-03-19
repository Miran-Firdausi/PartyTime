from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

from .managers import UserManager, SellerManager


class User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True)
    phone = models.CharField(max_length=15, unique=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    objects = UserManager()


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


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
