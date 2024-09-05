from django.shortcuts import render

from django.http import JsonResponse

def request_view(request, request_type):
    data = {}
    if request_type == 1:
        data = {'type': 1, 'message': 'result 1'}
    elif request_type == 2:
        data = {'type': 2, 'message': 'result 2'}
    elif request_type == 3:
        data = {'type': 3, 'message': 'result 3'}
    else:
        data = {'type': 0, 'message': 'unknown result'}

    return JsonResponse(data)
# Create your views here.
