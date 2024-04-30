from django.db import models

# Create your models here.

class Todoapp(models.Model):
    task=models.CharField(max_length=255)
    created_at=models.DateTimeField(auto_now_add=True)
    deadline=models.DateTimeField()

    def __str__(self):
        return self.task

