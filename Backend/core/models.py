
from django.contrib.auth.models import AbstractUser,Group,Permission
from django.db import models
from .manager import SellerManager,CustomUserManager
from django.utils.translation import gettext_lazy as _


class Seller(AbstractUser):
    seller_id = models.IntegerField(primary_key=True)

    gender = models.CharField(max_length=1, null=False)
    phone_number = models.CharField(max_length=15, null=False)
    alternate_phonenumber = models.CharField(max_length=15, null=True)
    alternate_email = models.CharField(max_length=255, null=True)
    latitude = models.DecimalField(null=False, max_digits=9, decimal_places=6)
    longitude = models.DecimalField(null=False, max_digits=9, decimal_places=6)
    shop_act_license = models.FileField(null=False)
    fssai = models.FileField(null=False)
    seller_upi = models.CharField(max_length=255, null=True)
    REQUIRED_FIELDS = []
    objects = SellerManager()

    # Required for custom user models
    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_('The groups this user belongs to.'),
        related_name='seller_groups',  # Custom related_name
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='seller_permissions',  # Custom related_name
        related_query_name='user',
    )

    def __str__(self):
        return self.username

class CustomUser(AbstractUser):
    user_id = models.IntegerField(primary_key=True)  # Renamed user_id to seller_id
    gender = models.CharField(max_length=1)
    phone_number = models.CharField(max_length=15)
    user_upi = models.CharField(max_length=25)


    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_('The groups this user belongs to.'),
        related_name='customuser_groups',  # Custom related_name
        related_query_name='user',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='customuser_permissions',  # Custom related_name
        related_query_name='user',
    )

    def __str__(self):
        return self.username

class UserLocation(models.Model):
    location_id = models.IntegerField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)

    def __str__(self):
        return f"Location ID: {self.location_id}, User ID: {self.user_id}, Latitude: {self.latitude}, Longitude: {self.longitude}"