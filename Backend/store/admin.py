from django.contrib import admin
from .models import Product, Category, ProductSeller

admin.site.register(Product)
admin.site.register(Category)


class ProductSellerAdmin(admin.ModelAdmin):
    readonly_fields = ('discountedPrice',)
    fields = ('product', 'seller', 'quantity', 'expiry_image', 'expiry_date', 'discountedPrice')

    def get_readonly_fields(self, request, obj=None):
        readonly_fields = super().get_readonly_fields(request, obj)
        if obj:  # If the object is being edited
            readonly_fields += ('discountedPrice',)
        return readonly_fields


admin.site.register(ProductSeller, ProductSellerAdmin)
