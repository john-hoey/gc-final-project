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
  ppIdFromService: string;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getPPIdFromServiceAndGetAndSetBillsById();
  }
  getAndSetBillsById = (memberId) => {
    return this.voteService
      .getRecentBillsByMember(memberId)
      .subscribe((response: any) => {
        this.billsById = response.results[0].bills;
      });
  };

  getAndSetMemberPosition = (memberPositionId) => {
    return this.voteService
      .getMemberPosition(memberPositionId)
      .subscribe((response: any) => {
        this.memberPosition = response.results;
      });
  };
  setMemberPosition = (searchTerm: string) => {
    this.getAndSetMemberPosition(searchTerm);
    this.getAndSetBillsById(searchTerm);
  };

  toggleMemberPosition = () => {
    this.showMemberPosition = !this.showMemberPosition;
  };

  toggleBillsById = () => {
    this.showBillsById = !this.showBillsById;
  };

  getPPIdFromServiceAndGetAndSetBillsById = () => {
    this.ppIdFromService = this.voteService.getPPId();
    this.getAndSetBillsById(this.ppIdFromService);
    this.getAndSetMemberPosition(this.ppIdFromService);
  };
}
