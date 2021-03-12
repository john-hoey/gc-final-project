import { Component, Input, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
})
export class ApiTestComponent implements OnInit {
  @Input() electionRef: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}
}
