from django.urls import path
from .views import ListingView
from .views import TrackListingView

urlpatterns = [
    path('hello/', ListingView.as_view()),
    path('track-listing', TrackListingView.as_view()),

]