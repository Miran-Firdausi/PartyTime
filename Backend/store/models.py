from django.db import models
from core.models import Seller
#from  .serializers import ProductSerializer
#from datetime import datetime
#from django.utils import timezone
#from django.utils.timezone import now

# Example default values:


class Category(models.Model):
    category_id = models.IntegerField(primary_key=True,default=1)
    name = models.CharField(max_length=255, null=False,default="category1")
    description = models.CharField(max_length=300, null=False,default="Enter description here")
    category_image = models.ImageField(null=True)

    def __str__(self):
        return self.name



class Products(models.Model):
    product_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    originalPrice = models.DecimalField(null=False, max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    product_image = models.ImageField(null=True)
    expiry_image = models.ImageField(null=False)
    weight = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    volume = models.DecimalField(null=True, max_digits=10, decimal_places=2)
    expire_date = models.DateField(null=False)  # Set default to current date
    seller_id = models.ForeignKey(Seller, on_delete=models.CASCADE)
    quantity = models.IntegerField(null=False)
    discountedPrice = models.DecimalField(max_digits=10, decimal_places=2, null=True)

    @property
    def discounted_price(self):
        # Calculation logic for discounted price
        pass




# Create your models here.
