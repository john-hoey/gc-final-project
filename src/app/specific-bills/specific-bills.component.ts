import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-specific-bills',
  templateUrl: './specific-bills.component.html',
  styleUrls: ['./specific-bills.component.css'],
})
export class SpecificBillsComponent implements OnInit {
  @Output() specificBillSearchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  emitSpecificBillSearch = (form: NgForm) => {
    console.log(form);
    this.specificBillSearchEvent.emit(form.form.value.specificBillTerm);
  };
}
