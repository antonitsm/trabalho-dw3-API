from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import estudanteviewset

router = DefaultRouter()
router.register('estudantes', estudanteviewset)

urlpatterns = [
    path('', include(router.urls)),
]