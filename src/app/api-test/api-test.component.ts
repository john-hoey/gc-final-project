import { Component, Input, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
})
export class ApiTestComponent implements OnInit {
  elections: any;
  address: string = '34131 beechnut westland michigan 48186';
  electionId: string = '2000';
  voterInfo: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetElections();
    this.getAndSetVoterInfo();
  }
  getAndSetElections = () => {
    this.voteService.getElections().subscribe((response) => {
      console.log(response);
      this.elections = response;
    });
  };

  getAndSetVoterInfo = () => {
    this.voteService
      .getVoterInfo(this.address, this.electionId)
      .subscribe((response) => {
        console.log(response);
        this.voterInfo = response;
      });
  };
}
