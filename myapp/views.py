from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import RequestData,ExpResult


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
@csrf_exempt
def set_exp(request):
    if request.method == 'POST':
        new_data = json.loads(request.body)
        message = new_data.get('message')
        exp_id = new_data.get("exp_id")
        index =  new_data.get("index")
        self_val = new_data.get("self_val")
        computer_val = new_data.get("computer_val")
        reaction_time = new_data.get("reaction_time")
        time = new_data.get("time")
        if ExpResult.objects.filter(exp_id=exp_id, index=index) is not None:
            ExpResult.objects.filter(exp_id=exp_id, index=index).delete()
            ExpResult.objects.update_or_create(exp_id=exp_id,index=index,self_val=self_val,computer_val=computer_val,reaction_time=reaction_time,time=time)
            return JsonResponse({'status': 'success', 'message': f'Data has been saved {message}'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Not post'})
    return JsonResponse({'status': 'error', 'message': 'Invilid'})
def get_exp(request,exp_id):
    data = ExpResult.objects.filter(exp_id=exp_id)
    if data is not None:
        result_list = list(data.values())  # 也可以使用 list(data) 以获取对象
        return render(request, 'myapp/table.html', {'data': result_list})
    return JsonResponse({'status': 'error', 'message': 'Invilid'})

    