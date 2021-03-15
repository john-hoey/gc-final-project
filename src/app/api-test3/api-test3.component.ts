import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test3',
  templateUrl: './api-test3.component.html',
  styleUrls: ['./api-test3.component.css'],
})
export class ApiTest3Component implements OnInit {
  proStatements: string = 'NRA';
  statements: any;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetStatements();
  }

  getAndSetStatements = () => {
    this.voteService
      .getStatements(this.proStatements)
      .subscribe((response: any) => {
        console.log(response.results);
        this.statements = response.results;
      });
  };
}
