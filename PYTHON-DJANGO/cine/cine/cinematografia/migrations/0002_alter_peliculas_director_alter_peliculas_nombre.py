# Generated by Django 4.1.1 on 2022-09-18 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cinematografia', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peliculas',
            name='director',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='peliculas',
            name='nombre',
            field=models.CharField(max_length=50),
        ),
    ]