import { NotesService } from './../notes.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Note } from './../note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private _noteService: NotesService) { }

  ngOnInit() {
    this._noteService.noteObserver.subscribe(
      notes => this.notes = notes
    );
    this._noteService.retrieveAll();
  }

}

