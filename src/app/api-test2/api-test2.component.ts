import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-api-test2',
  templateUrl: './api-test2.component.html',
  styleUrls: ['./api-test2.component.css'],
})
export class ApiTest2Component implements OnInit {
  @Input() legislatorRef: any;

  constructor() {}

  ngOnInit(): void {}
}
