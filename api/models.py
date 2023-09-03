from django.db import models
import string
import random

def generate_unique_id():
    length = 8
    while True:
        hemnet_listing_id = ''.join(random.choices(string.digits, k=length))
        if Listing.objects.filter(hemnet_listing_id=hemnet_listing_id).count() == 0:
            break
    return hemnet_listing_id


# Create your models here.
class Listing(models.Model):
    hemnet_listing_id = models.AutoField(primary_key=True, default=generate_unique_id, unique=True)

    def __str__(self):
        return self.hemnet_listing_id
