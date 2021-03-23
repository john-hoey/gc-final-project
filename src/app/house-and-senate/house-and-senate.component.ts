import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-house-and-senate',
  templateUrl: './house-and-senate.component.html',
  styleUrls: ['./house-and-senate.component.css'],
})
export class HouseAndSenateComponent implements OnInit {
  @Output() houseAndSenateEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  emitHouseAndSenate = (form: NgForm) => {
    this.houseAndSenateEvent.emit(form.form.value.houseAndSenate);
  };
}
