from django.db import models
from store.models import Products
from core.models import CustomUser,Seller

class Cart(models.Model):
    cart_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    items_in_cart = models.ManyToManyField(Products, through='CartItems')
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_items = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Cart ID: {self.cart_id}, User ID: {self.user_id}, Total Price: {self.total_price}, Total Items: {self.total_items}"

class CartItems(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity_buying = models.PositiveIntegerField(default=1)

    def subtotal(self):
        return self.quantity_buying * self.product.discounted_price

    def save(self, *args, **kwargs):
        self.cart.total_price += self.subtotal()
        self.cart.total_items += self.quantity_buying
        self.cart.save()
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        self.cart.total_price -= self.subtotal()
        self.cart.total_items -= self.quantity_buying
        self.cart.save()
        super().delete(*args, **kwargs)

    def __str__(self):
        return f"Cart ID: {self.cart_id}, Product: {self.product.name}, Quantity Buying: {self.quantity_buying}, Subtotal: {self.subtotal()}"


  # Import your CustomUser, Product, and Seller models

class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)
    order_total = models.DecimalField(max_digits=10, decimal_places=2)
    items_in_order = models.ManyToManyField(Products, through='OrderItems')
    transaction_id = models.CharField(max_length=255)
    paid_to_upi = models.CharField(max_length=255, default='our upi')
    transaction_amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_status = models.CharField(max_length=255)
    transaction_timestamp = models.DateTimeField()
    payment_gateway_response = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Order ID: {self.order_id}, User ID: {self.user_id}, Seller ID: {self.seller_id}, Total: {self.order_total}, Status: {self.transaction_status}"

class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    quantity_bought = models.PositiveIntegerField()
    subtotal = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        self.subtotal = self.quantity_bought * self.product.discounted_price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order ID: {self.order_id}, Product: {self.product.name}, Quantity Bought: {self.quantity_bought}, Subtotal: {self.subtotal}"
