from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login),
    path('logout/', views.logout),
    path('seller/login/', views.seller_login),

    path('api/csrf_token/', views.get_csrf_token, name='get_csrf_token'),
    path('api/token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.register_customer, name='user_register'),
]