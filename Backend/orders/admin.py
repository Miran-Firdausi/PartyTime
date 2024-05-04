from django.contrib import admin
from .models import Cart, CartItem, Order

# Register your models here.
# admin.site.register(Cart)
# admin.site.register(CartItem)
class CartItemInline(admin.TabularInline):
    model = CartItem

class CartAdmin(admin.ModelAdmin):
    inlines = (CartItemInline,)

admin.site.register(Cart, CartAdmin)

admin.site.register(Order)