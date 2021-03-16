import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-organizations-by-name',
  templateUrl: './search-organizations-by-name.component.html',
  styleUrls: ['./search-organizations-by-name.component.css'],
})
export class SearchOrganizationsByNameComponent implements OnInit {
  @Output() searchOrgsByNameEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitOrgSearchName = (form: NgForm) => {
    console.log(form);
    this.searchOrgsByNameEvent.emit(form.form.value.orgSearchTerm);
  };
}
