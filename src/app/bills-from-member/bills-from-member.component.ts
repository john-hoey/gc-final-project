import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-bills-from-member',
  templateUrl: './bills-from-member.component.html',
  styleUrls: ['./bills-from-member.component.css'],
})
export class BillsFromMemberComponent implements OnInit {
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {}

  getAndSetBillsById = (memberId: string) => {
    console.log(memberId);
    return this.voteService
      .getRecentBillsByMember(memberId)
      .subscribe((response: any) => {
        console.log(response);
      });
  };
}
