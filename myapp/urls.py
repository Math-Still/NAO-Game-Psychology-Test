from django.urls import path
from .views import request_view,set_view

urlpatterns = [
    path('getdata/', request_view, name='request_view'),
    path('setdata/', set_view, name='set_view'),
]