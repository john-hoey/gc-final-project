import { Component, OnInit } from '@angular/core';
import { filter } from 'txml';
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
  houseMembers: any;
  senateMembers: any;
  houseData: any;
  senateData: any;
  searchTerm: string = '';
  senateDataShown: any;
  houseDataShown: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.getAndSetStatements();
    this.getAndSetBills();
    this.getAndSetHouseAndSenate();
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

  getAndSetHouseAndSenate = () => {
    this.voteService.getHouse().subscribe((response: any) => {
      console.log(response);
      this.houseData = response.results[0].members;
      this.houseDataShown = this.houseData;
    });
    this.voteService.getSenate().subscribe((response: any) => {
      console.log(response.results[0].members);
      this.senateData = response.results[0].members;
      this.senateDataShown = this.senateData;
    });
  };

  setSearchTerm = (searchTerm: string) => {
    console.log(searchTerm);
    this.searchTerm = searchTerm;
    this.updateSenate();
    this.updateHouse();
  };

  filterSenate = (term: string) => {
    return this.senateData.filter((item: any) => {
      let currentTerm = item.first_name.toLowerCase().trim();
      return currentTerm.includes(term.toLowerCase().trim());
    });
  };
  updateSenate = () => {
    this.senateDataShown = this.filterSenate(this.searchTerm);
  };
  filterHouse = (term: string) => {
    return this.houseData.filter((item: any) => {
      let currentTerm = item.first_name.toLowerCase().trim();
      return currentTerm.includes(term.toLowerCase().trim());
    });
  };
  updateHouse = () => {
    this.houseDataShown = this.filterHouse(this.searchTerm);
  };
}
