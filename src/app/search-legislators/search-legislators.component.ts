import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-legislators',
  templateUrl: './search-legislators.component.html',
  styleUrls: ['./search-legislators.component.css'],
})
export class SearchLegislatorsComponent implements OnInit {
  @Output() searchLegislatorsByStateEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitLegislatorSearchStateId = (form: NgForm) => {
    console.log(form);
    this.searchLegislatorsByStateEvent.emit(form.form.value.stateSearchTerm);
  };
}
