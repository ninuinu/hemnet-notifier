from django.shortcuts import render
from rest_framework import generics, status
from .serializers import ListingSerializer, TrackListingSerializer
from .models import Listing
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class ListingView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

class TrackListingView(APIView):
    serializer_class = TrackListingSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            hemnet_list_id = serializer.data.get('hemnet_listing_id')
            queryset = Listing.objects.filter(hemnet_listing_id=hemnet_list_id)
            if queryset.exists():
                listing = queryset[0]
                listing.hemnet_listing_id = hemnet_list_id
                listing.save(update_fields=['hemnet_listing_id'])
                return Response(ListingSerializer(listing).data, status=status.HTTP_200_OK)
            else:
                listing = Listing(hemnet_listing_id=hemnet_list_id)
                listing.save()
                return Response(ListingSerializer(listing).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
                   