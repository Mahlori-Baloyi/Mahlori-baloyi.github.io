# Generated by Django 5.0.4 on 2024-05-08 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_blogs'),
    ]

    operations = [
        migrations.CreateModel(
            name='FooterImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(upload_to='images')),
            ],
        ),
    ]
