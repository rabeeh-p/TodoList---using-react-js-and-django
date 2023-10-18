from django.shortcuts import render
from django.http import JsonResponse
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NoteSerializer

# Create your views here.


def home(request):
    return render(request,'index.html')

def getHome(request):
    return JsonResponse('hello api',safe=False)

# read
@api_view(['GET'])
def getNotes(request):
    note=Note.objects.all().order_by('-updated')
    serializer=NoteSerializer(note,many=True)

    return Response( serializer.data)

# creating
@api_view(['POST'])
def createNote(request):
    # data= dictionary
    data=request.data
    print(data['body'])
    note=Note.objects.create(body=data['body'])
    serializer=NoteSerializer(note,many=False)
    return Response(serializer.data)

# Single data reading
@api_view(['GET'])
def getNote(request,id):
    note=Note.objects.get(id=id)
    serializer=NoteSerializer(note,many=False)

    return Response(serializer.data)

# updating
@api_view(['PUT'])
def Updated(request,id):
    data=request.data
    note=Note.objects.get(id=id)
    serializer=NoteSerializer(instance=note,data=data)

    if serializer.is_valid():
        serializer.save()


    return Response(serializer.data)

# deleting
@api_view(["DELETE"])
def noteDelete(request,id):
    note=Note.objects.get(id=id).delete()
    return Response("note was deleted")