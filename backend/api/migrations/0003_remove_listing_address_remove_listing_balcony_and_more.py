# Generated by Django 4.2.4 on 2023-09-03 19:58

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_listing_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listing',
            name='address',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='balcony',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='date_published',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='elevator',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='floor',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='id',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='image_url',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='location_id',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='monthly_fee',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='patio',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='price',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='room_count',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='sqm_price',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='sqm_size',
        ),
        migrations.RemoveField(
            model_name='listing',
            name='url',
        ),
        migrations.AlterField(
            model_name='listing',
            name='hemnet_listing_id',
            field=models.AutoField(default=api.models.generate_unique_id, primary_key=True, serialize=False, unique=True),
        ),
    ]
