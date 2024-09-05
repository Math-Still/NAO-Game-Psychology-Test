from django.urls import path
from .views import request_view

urlpatterns = [
    path('getdata/<int:request_type>/', request_view, name='request_view'),
]