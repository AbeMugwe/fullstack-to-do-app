# Generated by Django 5.0.4 on 2024-04-30 14:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoapp', '0002_remove_todoapp_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todoapp',
            name='task',
            field=models.CharField(max_length=255),
        ),
    ]
