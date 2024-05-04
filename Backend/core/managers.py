from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password, phone, **extra_fields):
        if not email:
            raise ValueError('Users must have an email address')
        if not first_name:
            raise ValueError('First name is required')
        if not last_name:
            raise ValueError('Last name is required')
        if not phone:
            raise ValueError('Phone number is required')

        email = self.normalize_email(email)
        user = self.model(email=email,
                          first_name=first_name,
                          last_name=last_name,
                          phone=phone,
                          **extra_fields)

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        first_name = extra_fields.pop('first_name', '')
        last_name = extra_fields.pop('last_name', '')
        phone = extra_fields.pop('phone', '')

        return self.create_user(email, first_name, last_name, password, phone, **extra_fields)


class CustomerManager(BaseUserManager):
    def create(self, **extra_fields):
        customer = self.model(**extra_fields)
        customer.save()
        return customer


class SellerManager(BaseUserManager):
    def create(self, **extra_fields):
        # if not email:
        #     raise ValueError('The Email field must be set')
        # email = self.normalize_email(email)
        seller = self.model(**extra_fields)
        # user.set_password(password)
        seller.save()
        return seller
