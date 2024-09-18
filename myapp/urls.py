from django.urls import path
from .views import request_view,set_view,set_exp,get_exp,get_image,qisay,setip

urlpatterns = [
    # path('getdata/', request_view , name = 'request_view'),
    # path('setdata/', set_view, name = 'set_view'),
    path("set_exp/",set_exp, name = "set_exp"),
    path("get_exp/<int:exp_id>/",get_exp, name = "get_exp"),
    path('img/<str:image_name>/', get_image, name='get_image'),
    path('qisay/',qisay),
    path('setip/<str:ip>/',setip),
    

]