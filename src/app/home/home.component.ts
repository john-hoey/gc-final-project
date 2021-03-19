import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { VoteService } from '../vote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  address: string;
  state: string;
  elections: any;
  electionId: string;
  voterInfo: any;
  constructor(private voteService: VoteService, private route: Router) {}

  ngOnInit(): void {
    this.getAndSetElections();
  }

  getAndSetValues = (form: NgForm) => {
    this.address = form.form.value.address;
    this.state = form.form.value.state;
    this.routeToGoogleCiv();
  };
  // getAndSetVoterInfo = () => {
  //   this.voteService
  //     .getVoterInfo(this.address, this.electionId)
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.candidates = response;
  //       this.voterInfo = response;
  //     });
  // };

  getAndSetElections = () => {
    this.voteService.getElections().subscribe((response) => {
      console.log(response);
      this.elections = response;
    });
  };

  getAndSetElectionId = (form: NgForm) => {
    this.electionId = form.form.value.election;
  };

  getAndSetVoterInfo = () => {
    this.voteService
      .getVoterInfo(this.address, this.electionId)
      .subscribe((response) => {
        console.log(response);
        this.voterInfo = response;
      });
  };
  setGlobalAddress = () => {
    this.voteService.setAddress(this.address);
    console.log(this.voteService.getAddress());
  };
  routeToGoogleCiv = () => {
    this.route.navigate(['/google-civic']);
  };
}
