from django.urls import path
from .views import home,update,delete,create

urlpatterns=[
    path('todo/',home,name='home'),
    path('add/',create,name='add'),
    path('edit/<int:id>',update,name='edit'),
    path('delete/<int:id>',delete,name='delete')
]