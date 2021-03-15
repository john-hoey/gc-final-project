import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-election-info',
  templateUrl: './election-info.component.html',
  styleUrls: ['./election-info.component.css'],
})
export class ElectionInfoComponent implements OnInit {
  @Output() electionSearchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  emitElectionTerm = (form: NgForm) => {
    console.log(form.form.value.electionSearch);
    this.electionSearchEvent.emit(form.form.value.electionSearch);
  };
}
