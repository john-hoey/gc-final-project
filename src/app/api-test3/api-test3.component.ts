import { Component, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test3',
  templateUrl: './api-test3.component.html',
  styleUrls: ['./api-test3.component.css'],
})
export class ApiTest3Component implements OnInit {
  proStatement: string = 'NRA';
  statements: any;
  statementTerm: any;
  statementData: any;
  statementDataShown: any;
  bills: any;
  billTerm: any;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.getAndSetStatements();
    this.getAndSetBills();
  }

  getAndSetStatements = () => {
    this.voteService
      .getStatements(this.proStatement)
      .subscribe((response: any) => {
        console.log(response.results);
        this.statements = response.results;
      });
  };
  getAndSetBills = () => {
    this.voteService.getBills(this.billTerm).subscribe((response: any) => {
      console.log(response.results[0].bills);
      this.bills = response.results[0].bills;
    });
  };
  // onStatementSearchSubmit = (statementTerm: string): void => {
  //   this.proStatement = statementTerm;
  //   this.voteService
  //     .searchStatements(statementTerm)
  //     .subscribe((response: any) => {
  //       this.statements = response.results;
  //       console.log(response.results);
  //       this.getAndSetStatements();
  //     });
  // };
  onBillSearchSubmit = (billTermParam: string): void => {
    this.billTerm = `${billTermParam}`;
    this.voteService.getBills(billTermParam).subscribe((response: any) => {
      this.bills = response.results[0].bills;
      console.log(response.results);
      this.getAndSetBills();
    });
  };
}
