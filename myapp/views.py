from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import RequestData


def request_view(request):
    try:
        data = RequestData.objects.get(request_type=1)
        return JsonResponse({'request_type': 1, 'message': data.message})
    except RequestData.DoesNotExist:
        return JsonResponse({'request_type': 2, 'message': 'Unknown'})
@csrf_exempt
def set_view(request):
    if request.method == 'POST':
        new_data = json.loads(request.body)
        request_type = new_data.get('request_type')
        message = new_data.get('message')
        if request_type and message:
            RequestData.objects.update_or_create(request_type=request_type, defaults={'request_type': 1,'message': message})
            return JsonResponse({'status': 'success', 'message': f'Data has been saved {message}'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Not post'})
    return JsonResponse({'status': 'error', 'message': 'Invilid'})
# Create your views here.
