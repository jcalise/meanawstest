import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NotesService } from './notes.service';



@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NoteNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
