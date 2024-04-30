from django.shortcuts import render,get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Todoapp
from .serializer import TodoSerializer

# Create your views here.

@api_view(['GET'])
def home(request):
    tasks=Todoapp.objects.all()
    serializer=TodoSerializer(tasks,many=True)
    return Response(serializer.data)

@api_view(['GET','POST'])
def create(request):
    if request.method == "POST":
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message" : "Blog created successfully"})
    elif request.method == "GET":
        return Response({"message" : "Create a blog"})

@api_view(['PUT','GET'])
def update(request,id):
    task=get_object_or_404(Todoapp,pk= id)
    if request.method == 'PUT':
        serializer=TodoSerializer(task,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message':'Updated Blog'})
        else:
            return Response(serializer.errors)
    elif request.method == 'GET':
        serializer=TodoSerializer(task)
        return Response(serializer.data)
    
@api_view(['DELETE'])
def delete(request,id):
    task=get_object_or_404(Todoapp,pk=id)
    task.delete()
    return Response({"message" : "Blog deleted successfully"})




    

