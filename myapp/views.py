from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from .models import RequestData,ExpResult
from django.conf import settings
import os
import pandas as pd
import time

# import qi
myip = "127.0.0.1"

@csrf_exempt
def save(request):
    exp_data = ExpResult.objects.filter(exp_id__in=[0,1,2,3,4,5])  # 替换为实际的 exp_id
    data = {
        'exp_id': [],
        'index': [],
        'self_val': [],
        'computer_val': [],
        'reaction_time': [],
        'time': [],
        'option': [],
        'other_option': []
    }
    for result in exp_data:
        data['exp_id'].append(result.exp_id)
        data['index'].append(result.index)
        data['self_val'].append(result.self_val)
        data['computer_val'].append(result.computer_val)
        data['reaction_time'].append(result.reaction_time)
        data['time'].append(result.time)
        data['option'].append(result.option)
        data['other_option'].append(result.other_option)
    df = pd.DataFrame(data)

    # 导出到 CSV 文件
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()) 
    csv_file_path = f'experiment_results_{timestamp}.csv'
    df.to_csv(csv_file_path, index=False)
    print(f"CSV 文件已成功生成：{csv_file_path}")
    return JsonResponse({'status': 'success', 'message': f'Data has been saved'})

def get_image(request, image_name):
    # 构建图片的完整路径
    image_path = os.path.join(settings.BASE_DIR, 'static', 'img', image_name)
    # print(image_path)

    # 尝试打开并返回图片
    try:
        with open(image_path, 'rb') as img:
            return HttpResponse(img.read(), content_type='image/jpeg')
    except FileNotFoundError:
        return HttpResponse(status=404)  # 返回404错误
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
        option = new_data.get("option")
        other_option = new_data.get("other_option")
        if ExpResult.objects.filter(exp_id=exp_id, index=index) is not None:
            ExpResult.objects.filter(exp_id=exp_id, index=index).delete()
            ExpResult.objects.update_or_create(exp_id=exp_id,index=index,self_val=self_val,computer_val=computer_val,reaction_time=reaction_time,time=time,option=option,other_option=other_option)
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

@csrf_exempt
def qisay(request):
    ip=myip
    if request.method == 'POST':
        new_data = json.loads(request.body)
        say_text = new_data.get("say_text")
        iptmp = f'tcp://{ip}:9559'
        session = qi.Session()
        session.connect(iptmp)
        tts = session.service("ALTextToSpeech")
        tts.setLanguage("Chinese")
        tts.say(say_text)
        return JsonResponse({'status': 'success', 'message': 'say'})
    return JsonResponse({'status': 'error', 'message': 'not post'})
def setip(request,ip):
    global  myip 
    myip=ip
    print(myip)
    return JsonResponse({'status': 'error', 'message': f'set ip:{myip}'})
