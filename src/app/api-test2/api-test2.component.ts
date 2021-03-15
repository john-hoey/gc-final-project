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

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetLegislators();
  }
  getAndSetLegislators = () => {
    this.voteService.getLegislators(this.state).subscribe((response: any) => {
      console.log(response.response.legislator[0]['@attributes']);
      this.legislators = response.response.legislator;
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
