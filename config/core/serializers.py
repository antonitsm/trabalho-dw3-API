from rest_framework import serializers
from .models import estudante

class estudanteserializer(serializers.ModelSerializer):
    class Meta:
        model = estudante
        fields = '__all__'