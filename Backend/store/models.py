from django.db import models
from django.db import models
from datetime import datetime, date

from django.utils import timezone

from core.models import Seller
import os
from django.utils.timezone import now


class Category(models.Model):
    category_id = models.IntegerField(primary_key=True, default=1)
    name = models.CharField(max_length=255, null=False, default="category1")
    description = models.CharField(max_length=300, null=False, default="Enter description here")
    category_image = models.ImageField(null=True, upload_to='category_images')

    def __str__(self):
        return self.name


def product_image_path(instance, filename):
    ext = filename.split('.')[-1]  # Get the file extension
    filename = f"{instance.name}_{now().strftime('%Y%m%d%H%M%S')}.{ext}"
    return os.path.join('product_images', filename)


def expiry_image_path(instance, filename):
    ext = filename.split('.')[-1]  # Get the file extension
    filename = f"{instance.product.name}_{now().strftime('%Y%m%d%H%M%S')}.{ext}"
    return os.path.join('expiry_images', filename)


class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    description = models.CharField(max_length=1000, null=True)
    originalPrice = models.DecimalField(null=False, max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_image = models.ImageField(null=True, upload_to=product_image_path)
    weight = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    volume = models.DecimalField(null=True, max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class ProductSeller(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    discountedPrice = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    quantity = models.IntegerField(default=0)
    expiry_date = models.DateField(null=True, blank=True)
    expiry_image = models.ImageField(null=True, upload_to=expiry_image_path)

    class Meta:
        unique_together = ('product', 'seller')

    def __str__(self):
        return f"{self.product.name} - {self.seller.user.first_name}"

    def calculate_discounted_price(self):
        if self.expiry_date:
            days_to_expire = (self.expiry_date - timezone.now().date()).days
            if days_to_expire <= 1:
                discount_percentage = 0.9
            elif days_to_expire <= 5:
                discount_percentage = 0.8
            elif days_to_expire <= 10:
                discount_percentage = 0.6
            elif days_to_expire <= 15:
                discount_percentage = 0.4
            elif days_to_expire <= 30:
                discount_percentage = 0.2
            elif days_to_expire <= 60:
                discount_percentage = 0.1
            else:
                discount_percentage = 0
            discounted_price = float(self.product.originalPrice) * (1 - discount_percentage)
            return discounted_price
        return self.product.originalPrice

    def save(self, *args, **kwargs):
        self.discountedPrice = self.calculate_discounted_price()
        super().save(*args, **kwargs)
