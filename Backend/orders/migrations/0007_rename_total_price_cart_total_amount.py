# Generated by Django 5.0.1 on 2024-05-04 18:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_remove_cartitem_quantity_buying_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='total_price',
            new_name='total_amount',
        ),
    ]