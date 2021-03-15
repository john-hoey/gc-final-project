import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-statements',
  templateUrl: './search-statements.component.html',
  styleUrls: ['./search-statements.component.css'],
})
export class SearchStatementsComponent implements OnInit {
  @Output() searchStatementEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitStatementSearch = (form: NgForm) => {
    console.log(form);
    this.searchStatementEvent.emit(form.form.value.statementSearchTerm);
  };
}
