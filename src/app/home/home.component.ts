import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  elections: any;
  voterInfo: any;
  address: string = '34131 beechnut westland michigan 48186';
  electionId: string = '2000';
  state: string = 'MI';
  legislators: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetElections();
    this.getAndSetVoterInfo();
    this.getAndSetLegislators();
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

  getAndSetLegislators = () => {
    this.voteService.getLegislators(this.state).subscribe((response: any) => {
      console.log(response.response.legislator[0]['@attributes']);
      this.legislators = response.response.legislator;
    });
  };
}
