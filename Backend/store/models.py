from django.db import models

#shopping_app/models.py
from django.db import models
from datetime import datetime
from django.utils import timezone

# Example default values:
default_expiry_date = timezone.now().date()  # Set the default expiry date to the current date
default_weight = 1.0  # Set the default weight to 1.0 (for example)


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    originalPrice = models.DecimalField(max_digits=10, decimal_places=2,null=True)
    discountedPrice=models.DecimalField(max_digits=10, decimal_places=2, null=True )
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/',null=True)
    weight = models.DecimalField(max_digits=10, decimal_places=2, default=default_weight)
    expiry_date = models.DateField(default=default_expiry_date)

    def __str__(self):
        return self.name


# Create your models here.
