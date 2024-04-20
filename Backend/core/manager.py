from django.contrib.auth.models import BaseUserManager

class SellerManager(BaseUserManager):
    def create_seller(self, seller_id, username, email, password=None, **extra_fields):
        """
        Creates and saves a seller with the given seller_id, username, email, and password.
        """
        if not seller_id:
            raise ValueError('The seller_id field must be set')

        email = self.normalize_email(email)
        seller = self.model(seller_id=seller_id, username=username, email=email, **extra_fields)
        seller.set_password(password)
        seller.save(using=self._db)
        return seller

    def create_superuser(self, seller_id, username, email, password=None, **extra_fields):
        """
        Creates and saves a superuser with the given seller_id, username, email, and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_seller(seller_id, username, email, password, **extra_fields)
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, username, password, **extra_fields)