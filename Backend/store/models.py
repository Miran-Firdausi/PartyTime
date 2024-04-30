from django.db import models


from django.db import models
#from  .serializers import ProductSerializer
from datetime import datetime, date
from django.utils import timezone
from core.models import Seller

# Example default values:
default_expiry_date = timezone.now().date()  # Set the default expiry date to the current date
default_weight = 1.0  # Set the default weight to 1.0 (for example)


class Category(models.Model):
    category_id = models.IntegerField(primary_key=True, default=1)
    name = models.CharField(max_length=255, null=False, default="category1")
    description = models.CharField(max_length=300, null=False, default="Enter description here")
    category_image = models.ImageField(null=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    originalPrice = models.DecimalField(null=False, max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_image = models.ImageField(null=True)
    expiry_image = models.ImageField(null=True)
    weight = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    volume = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    expiry_date = models.DateField(null=False, default=date.today())
    seller_id = models.ForeignKey(Seller, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    discountedPrice = models.DecimalField(max_digits=10, decimal_places=2, null=True)



    def __str__(self):
        return self.name


# Create your models here.
