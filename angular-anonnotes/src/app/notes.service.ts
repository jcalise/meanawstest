import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class NotesService {
  noteObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retrieveAll() {
    this._http.get('/notes').subscribe(
      notes => this.noteObserver.next(notes.json()),
      errorResponse => console.log(errorResponse)
    );
  }

  createNote(note: Note) {
    this._http.post('/notes', note).subscribe(
      response => this.retrieveAll(),
      errorResponse => console.log(errorResponse)
    );
  }

}
