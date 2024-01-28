from django.shortcuts import render
from django.http import JsonResponse


def index(request):
    message = {
        'message': 'Django is working correctly',
    }
    return JsonResponse(message)
