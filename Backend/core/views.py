from django.shortcuts import render
from django.http import JsonResponse


# Create your views here.
def login(request):
    message = {
        "message": "Login successful",
    }
    return JsonResponse(message, False)
