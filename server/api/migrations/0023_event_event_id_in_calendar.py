# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2019-06-16 04:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_event_slack_channel'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_id_in_calendar',
            field=models.CharField(default=django.utils.timezone.now, max_length=150),
            preserve_default=False,
        ),
    ]