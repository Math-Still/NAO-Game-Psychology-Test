from django.shortcuts import render
def index_view(request):
    return render(request, 'viewapp/index.html')
def set_view(request):
    return render(request, 'viewapp/set.html')

