import { newArray } from '@angular/compiler/src/util';
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
  GcivRepresentativesOffices: any;
  GcivRepresentativesOfficials: any;
  GcivRepresentativesData: any;
  showElections: boolean = false;
  showReps: boolean = false;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetAddress();
    this.getAndSetElections();
    this.getAndSetRepresentativesOfficesAndOfficials();
  }

  getAndSetAddress = () => {
    this.GcivAddress = this.voteService.getAddress();
  };

  getAndSetElections = () => {
    this.voteService.getElections().subscribe((response) => {
      this.GcivElections = response;
    });
  };

  getAndSetRepresentativesOfficesAndOfficials = () => {
    this.voteService
      .getRepresentativesByAddress(this.GcivAddress)
      .subscribe((response: any) => {
        console.log(response);
        this.GcivRepresentativesOffices = response.offices;

        this.GcivRepresentativesOfficials = response.officials;
        this.mergeRepArrays(
          this.GcivRepresentativesOffices,
          this.GcivRepresentativesOfficials
        );
      });
  };

  // showAllElections = () => {
  //   this.showElections = !this.showElections;
  // };

  // showAllReps = () => {
  //   this.showReps = !this.showReps;
  // };

  mergeRepArrays = (array1Rep: any, array2Rep: any) => {
    let array1RepCopy = [...array1Rep];
    array1RepCopy.forEach((offices) => {
      let officialOffices: any[] = [];
      offices.officialIndices.forEach((item) => {
        let found = array2Rep.find((official, index) => {
          return item === index;
        });
        officialOffices.push(found);
      });
      offices.people = officialOffices;
    });

    this.GcivRepresentativesData = array1RepCopy;
  };

  showAllElections = () => {
    if ((this.showReps = true)) {
      this.showReps = !this.showReps;
      this.showElections = !this.showElections;
    } else {
      this.showElections = !this.showElections;
    }
  };

  showAllReps = () => {
    if ((this.showElections = true)) {
      this.showElections = !this.showElections;
      this.showReps = !this.showReps;
    } else {
      this.showReps = !this.showReps;
    }
  };
}
