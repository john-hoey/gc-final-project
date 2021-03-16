import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test2',
  templateUrl: './api-test2.component.html',
  styleUrls: ['./api-test2.component.css'],
})
export class ApiTest2Component implements OnInit {
  // @Input() legislatorRef: any;
  state: string = 'MI';
  legislators: any;
  stateLegislatorData: any;
  stateLegislatorDataShown: any;
  contributingInds: any;
  candidateId: string = 'N00039533';
  organizations: any;
  organizationName: string = 'cash';

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.getAndSetLegislators();
    // this.getAndSetTop10ContributingIndByCandidate();
    this.getAndSetOrgsByName();
  }
  getAndSetLegislators = () => {
    this.voteService.getLegislators(this.state).subscribe((response: any) => {
      console.log(response.response.legislator[0]['@attributes']);
      this.legislators = response.response.legislator;
    });
  };

  getAndSetTop10ContributingIndByCandidate = () => {
    this.voteService
      .getTop10ContributingIndByCandidate(this.candidateId)
      .subscribe((response: any) => {
        console.log(response.response.industries);
        console.log(response.response.industries.industry);
        this.contributingInds = response.response.industries.industry;
      });
  };

  getAndSetOrgsByName = () => {
    this.voteService
      .getOrgsByName(this.organizationName)
      .subscribe((response: any) => {
        console.log(response.response.organization);
        // console.log(response.response.organization['@attributes']);
        this.organizations = response.response.organization;
      });
  };
  onStateSearchSubmit = (stateId: string): void => {
    this.state = stateId;
    this.voteService
      .searchLegislatorsbyState(stateId)
      .subscribe((response: any) => {
        this.stateLegislatorData = response;
        console.log(response);
        // console.log(this.stateLegislatorDataShown);
        this.getAndSetLegislators();
      });
  };
}
