from django.shortcuts import render
from rest_framework import generics
from .serializers import ListingSerializer
from .models import Listing

# Create your views here.
class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
                  