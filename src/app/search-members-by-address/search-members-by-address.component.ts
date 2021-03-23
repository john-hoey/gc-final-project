import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-members-by-address',
  templateUrl: './search-members-by-address.component.html',
  styleUrls: ['./search-members-by-address.component.css'],
})
export class SearchMembersByAddressComponent implements OnInit {
  @Output() addressSearchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitAddress = (form: NgForm) => {
    this.addressSearchEvent.emit(form.form.value.address);
    form.reset();
  };
}
