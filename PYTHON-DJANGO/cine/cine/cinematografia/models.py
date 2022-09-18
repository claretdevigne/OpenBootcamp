from django.db import models

class Directores(models.Model):
  nombre = models.CharField(max_length=30)

  def __str__(self):
    return self.nombre

class Peliculas(models.Model):
  nombre = models.CharField(max_length=50)
  director = models.CharField(max_length=30)
  año = models.CharField(max_length=4)
  sinopsis = models.TextField()

  def __str__(self):
    return self.nombre
