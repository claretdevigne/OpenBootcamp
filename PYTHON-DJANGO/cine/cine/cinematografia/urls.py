from django.urls import path
from . import views

urlpatterns = [
  path('', views.VistaDirectores),
  path('directores', views.VistaDirectores),
  path('Steven Spielberg', views.VistaStevenSpielberg),
  path('James Cameron', views.VistaJamesCameron),
]
