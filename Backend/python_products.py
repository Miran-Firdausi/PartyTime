import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "partytime.settings")
django.setup()

from store.models import Product

products_data = [
    {
      "name": "Lays Classic Family Size",
      "original_price": 30,
      "discounted_price": 25,
      "image": '/images/product/Lays.png',
      "weight": 200

    },
    # Add other product data here...
]

for product_data in products_data:
    Product.objects.create(
        name=product_data["name"],
        originalPrice=product_data["original_price"],
        discountedPrice=product_data["discounted_price"],
        image=product_data["image"],
        weight=product_data["weight"],

    )
