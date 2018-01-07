import { NotesService } from './../notes.service';
import { Note } from './../note';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  note: Note = new Note();

  constructor(private _noteSerivce: NotesService) { }

  ngOnInit() {
  }

  onSubmit(note: Note) {
    this._noteSerivce.createNote(this.note);
    this.note = new Note();
  }

}
