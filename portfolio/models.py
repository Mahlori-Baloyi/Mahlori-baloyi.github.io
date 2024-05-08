from django.db import models

class WorkDone(models.Model):
    images = models.ImageField(upload_to='images')
    customer = models.CharField(max_length=100)
    upload_date = models.CharField(max_length=100)
    

class Blogs(models.Model):
    title = models.CharField(max_length=20)
    author = models.CharField(max_length=100)
    content = models.TextField()
    upload_date = models.CharField(max_length=100)
    category = models.CharField(max_length=20)

class FooterImage(models.Model):
    images = models.ImageField(upload_to='images')