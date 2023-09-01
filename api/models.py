from django.db import models
import string
import random

def generate_unique_id():
    length = 6
    while True:
        id = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Listing.objects.filter(id=id).count() == 0:
            break
    return id


# Create your models here.
class Listing(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    url = models.TextField(null=False)
    address = models.TextField(null=False)
    price = models.IntegerField(null=False)
    sqm_price = models.IntegerField()
    sqm_size = models.TextField()
    monthly_fee = models.IntegerField(null=False)
    room_count = models.TextField(null=False)
    image_url = models.TextField()
    hemnet_listing_id = models.IntegerField(null=False)
    date_published = models.DateTimeField(null=False)
    location_id = models.IntegerField(null=False)
    balcony = models.BooleanField()
    patio = models.BooleanField()
    floor = models.TextField()
    elevator = models.TextField()

    def __str__(self):
        return self.title
