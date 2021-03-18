import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-google-civic',
  templateUrl: './google-civic.component.html',
  styleUrls: ['./google-civic.component.css'],
})
export class GoogleCivicComponent implements OnInit {
  GcivAddress: string;
  GcivElections: any;
  GcivVoterInfo: any;
  GcivRepresentatives: any;
  showElections: boolean = false;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetAddress();
    this.getAndSetElections();
    this.getAndSetRepresentatives();
  }

  getAndSetAddress = () => {
    console.log(this.voteService.getAddress());
    this.GcivAddress = this.voteService.getAddress();
    console.log(this.GcivAddress);
  };

  getAndSetElections = () => {
    this.voteService.getElections().subscribe((response) => {
      console.log(response);
      this.GcivElections = response;
    });
  };

  getAndSetRepresentatives = () => {
    this.voteService
      .getRepresentativesByAddress(this.GcivAddress)
      .subscribe((response) => {
        console.log(response);
        this.GcivRepresentatives = response;
      });
  };

  showAllElections = () => {
    this.showElections = !this.showElections;
  };
}
