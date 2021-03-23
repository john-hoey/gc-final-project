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
  candidates: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetElections();
    this.getAndSetVoterInfo();
  }
  getAndSetElections = () => {
    this.voteService.getElections().subscribe((response) => {
      this.elections = response;
    });
  };

  getAndSetVoterInfo = () => {
    this.voteService
      .getVoterInfo(this.address, this.electionId)
      .subscribe((response) => {
        this.candidates = response;
        this.voterInfo = response;
      });
  };

  onElectionTermSubmit = (electionId: string) => {
    this.electionId = electionId;
    this.voteService
      .searchVoterInfo(this.address, electionId)
      .subscribe((response) => {
        this.voterInfo = response;

        this.getAndSetVoterInfo();
      });
  };

  onAddressSubmit = (address: string) => {
    this.address = address;
    this.getAndSetVoterInfo();
  };
}
