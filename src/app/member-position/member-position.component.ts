import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-position',
  templateUrl: './member-position.component.html',
  styleUrls: ['./member-position.component.css'],
})
export class MemberPositionComponent implements OnInit {
  @Output() memberPositionEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  emitMemberPosition = (form: NgForm) => {
    this.memberPositionEvent.emit(form.form.value.memberPositionId);
  };
}
