
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('/notify', index),
    path('/search', index),
]

