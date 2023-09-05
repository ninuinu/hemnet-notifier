from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['hemnet_listing_id']

class TrackListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['hemnet_listing_id']


