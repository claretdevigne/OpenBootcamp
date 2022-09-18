# Generated by Django 4.1.1 on 2022-09-18 04:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Directores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Peliculas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=30)),
                ('año', models.CharField(max_length=4)),
                ('sinopsis', models.TextField()),
                ('director', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cinematografia.directores')),
            ],
        ),
    ]
