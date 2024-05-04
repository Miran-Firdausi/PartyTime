from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from django.urls import path
from . import views

urlpatterns = [
    path('api/csrf_token/', views.get_csrf_token, name='get_csrf_token'),
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('login/', views.customer_login),
    path('register/', views.customer_register, name='user_register'),

    path('seller/login/', views.seller_login),
    path('seller/register/', views.seller_register),

    path('logout/', views.logout),

]