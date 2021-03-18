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

  getAndSetRepresentativesOfficesAndOfficials = () => {
    this.voteService
      .getRepresentativesByAddress(this.GcivAddress)
      .subscribe((response: any) => {
        this.GcivRepresentativesOffices = response.offices;
        console.log(response);
        this.GcivRepresentativesOfficials = response.officials;
        this.mergeRepArrays(
          this.GcivRepresentativesOffices,
          this.GcivRepresentativesOfficials
        );
      });
  };

  showAllElections = () => {
    this.showElections = !this.showElections;
  };

  showAllReps = () => {
    this.showReps = !this.showReps;
  };

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
    console.log(array1RepCopy);
    this.GcivRepresentativesData = array1RepCopy;
  };
}
