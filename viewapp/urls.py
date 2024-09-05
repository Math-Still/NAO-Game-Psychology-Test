from django.urls import path
from .views import index_view,set_view

urlpatterns = [
    path('', index_view, name='templates/viewapp'),  
    path('set_view', set_view, name='set_view'),  

]