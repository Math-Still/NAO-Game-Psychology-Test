from django.shortcuts import render
def index_view(request):
    return render(request, 'viewapp/index.html')
def static_view(request):
    return render(request, 'viewapp/index.html')

