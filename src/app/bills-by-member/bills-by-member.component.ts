import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-bills-by-member',
  templateUrl: './bills-by-member.component.html',
  styleUrls: ['./bills-by-member.component.css'],
})
export class BillsByMemberComponent implements OnInit {
  billsById: any;
  memberPosition: any;

  showMemberPosition: boolean = false;
  showBillsById: boolean = false;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}
  getAndSetBillsById = (memberId) => {
    return this.voteService
      .getRecentBillsByMember(memberId)
      .subscribe((response: any) => {
        console.log(response);
        this.billsById = response.results[0].bills;
      });
  };

  getAndSetMemberPosition = (memberPositionId) => {
    return this.voteService
      .getMemberPosition(memberPositionId)
      .subscribe((response: any) => {
        console.log(response.results);
        this.memberPosition = response.results;
      });
  };
  setMemberPosition = (searchTerm: string) => {
    console.log(searchTerm);
    this.getAndSetMemberPosition(searchTerm);
    this.getAndSetBillsById(searchTerm);
  };

  toggleMemberPosition = () => {
    this.showMemberPosition = !this.showMemberPosition;
  };

  toggleBillsById = () => {
    this.showBillsById = !this.showBillsById;
  };
}
