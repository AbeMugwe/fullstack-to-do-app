from rest_framework.serializers import ModelSerializer
from .models import Todoapp

class TodoSerializer(ModelSerializer):
    class Meta:
        model=Todoapp
        fields= '__all__'