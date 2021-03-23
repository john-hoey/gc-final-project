import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.css'],
})
export class BillInfoComponent implements OnInit {
  congressId: string;
  billId: string;

  specificBill: any;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetCongressAndBillId();
  }

  getAndSetCongressAndBillId = () => {
    this.congressId = this.voteService.getCongress();
    this.billId = this.voteService.getBillId();
    console.log(this.congressId);
    console.log(this.billId);
    this.getAndSetSpecificBill();
  };

  getAndSetSpecificBill = () => {
    this.voteService
      .getBillById(this.congressId, this.billId)
      .subscribe((response: any) => {
        this.specificBill = response.results;
        console.log(response.results);
      });
  };
}
