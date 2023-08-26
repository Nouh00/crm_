from django.db import models
from django.contrib.auth.models import User

# create Lead model with these fields: name, email, message, created_at
class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='leads', null=True)
    created_at = models.DateTimeField(auto_now_add=True)