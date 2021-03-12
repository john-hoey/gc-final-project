import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-test3',
  templateUrl: './api-test3.component.html',
  styleUrls: ['./api-test3.component.css'],
})
export class ApiTest3Component implements OnInit {
  @Input() statementRef: any;
  constructor() {}

  ngOnInit(): void {}
}
