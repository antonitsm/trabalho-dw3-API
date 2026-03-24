from django.shortcuts import render
from rest_framework import viewsets
from .models import estudante
from .serializers import estudanteserializer

class estudanteviewset(viewsets.ModelViewSet):
    queryset = estudante.objects.all()
    serializer_class = estudanteserializer