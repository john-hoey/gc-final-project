import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bills',
  templateUrl: './search-bills.component.html',
  styleUrls: ['./search-bills.component.css'],
})
export class SearchBillsComponent implements OnInit {
  @Output() searchBillEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  emitBillSearch = (form: NgForm) => {
    this.searchBillEvent.emit(form.form.value.billSearchTerm);
  };
}
