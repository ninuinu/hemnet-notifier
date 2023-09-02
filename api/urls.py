from django.urls import path
from .views import ListingView

urlpatterns = [
    path('hello/', ListingView.as_view())
]