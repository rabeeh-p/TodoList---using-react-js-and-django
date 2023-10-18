from django.urls import path,include
from . import views


urlpatterns = [
    
    # path('',views.home ),
    # path('',views.getHome ),
    path('notes/',views.getNotes,name='notes' ),
    path('notes/create/',views.createNote,name='create-notes' ),
    path('note/<int:id>/',views.getNote,name='note' ),
    path('update/<int:id>/',views.Updated,name='update' ),
    path('delete/<int:id>/',views.noteDelete,name='note-delete'), 

]
