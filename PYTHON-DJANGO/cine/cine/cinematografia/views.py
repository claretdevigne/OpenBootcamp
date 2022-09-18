from django.shortcuts import render
from .models import Directores, Peliculas

def VistaDirectores(request):
  directores = Directores.objects.all()
  return render(request, 'templates/directores.html', {'dire':directores})

def VistaStevenSpielberg(request):
  peliculas = Peliculas.objects.filter(director='Steven Spielberg')
  return render(request, 'templates/stevenspielberg.html', {'peliculas':peliculas})

def VistaJamesCameron(request):
  peliculas = Peliculas.objects.filter(director='James Cameron')
  return render(request, 'templates/jamescameron.html', {'peliculas':peliculas})