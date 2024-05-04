from django.db import models


from django.db import models
#from  .serializers import ProductSerializer
from datetime import datetime, date
from core.models import Seller
import os
from django.utils.timezone import now


default_weight = 1.0


class Category(models.Model):
    category_id = models.IntegerField(primary_key=True, default=1)
    name = models.CharField(max_length=255, null=False, default="category1")
    description = models.CharField(max_length=300, null=False, default="Enter description here")
    category_image = models.ImageField(null=True)

    def __str__(self):
        return self.name


def product_image_path(instance, filename):
    # Construct the upload path for product images
    ext = filename.split('.')[-1]  # Get the file extension
    filename = f"{instance.name}_{now().strftime('%Y%m%d%H%M%S')}.{ext}"  # Rename the file with the product name and timestamp
    return os.path.join('product_images', filename)


class Product(models.Model):
    name = models.CharField(max_length=255, null=False)
    originalPrice = models.DecimalField(null=False, max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_image = models.ImageField(null=True, upload_to=product_image_path)
    expiry_image = models.ImageField(null=True, upload_to=product_image_path)
    weight = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    volume = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    expiry_date = models.DateField(null=False)
    seller_id = models.ForeignKey(Seller, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    discountedPrice = models.DecimalField(max_digits=10, decimal_places=2, null=True)



    def __str__(self):
        return self.name


# Create your models here.
