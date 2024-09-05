from django.db import models


class RequestData(models.Model):
    request_type = models.IntegerField(unique=True)
    message = models.TextField()

    def __str__(self):
        return f"{self.request_type}: {self.message}"
# Create your models here.
