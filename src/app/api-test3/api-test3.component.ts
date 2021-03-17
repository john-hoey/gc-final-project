import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test3',
  templateUrl: './api-test3.component.html',
  styleUrls: ['./api-test3.component.css'],
})
export class ApiTest3Component implements OnInit {
  @Output() memberIdEvent = new EventEmitter<string>();
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
  specificBillTerm: string = '';
  specificBillData: any;
  specificBillDataShown: any;
  memberPosition: any;
  memberPositionId: string = 'K000388';

  memberId: string = '';
  billsById: any;
  showHouseAndSenate: boolean = true;
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.getAndSetStatements();
    this.getAndSetBills();
    this.getAndSetHouseAndSenate();
    this.getAndSetSpecificBills();
    // this.getAndSetBillsById();
    this.getAndSetMemberPosition();
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

  getAndSetSpecificBills = () => {
    this.voteService
      .getSpecificBillSubject(this.specificBillTerm)
      .subscribe((response: any) => {
        console.log(response.results[0].subjects);
        this.specificBillData = response.results[0].subjects;
        this.specificBillDataShown = this.specificBillData;
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

  setSpecificBillSearchTerm = (specificBillTerm: string) => {
    console.log(specificBillTerm);
    this.specificBillTerm = specificBillTerm;
    this.updateSpecificBill();
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
  filterSpecificBill = (term: string) => {
    return this.specificBillData.filter((item: any) => {
      let currentTerm = item.name.toLowerCase().trim();
      return currentTerm.includes(term.toLowerCase().trim());
    });
  };
  updateSpecificBill = () => {
    this.specificBillDataShown = this.filterSpecificBill(this.specificBillTerm);
  };

  getAndSetBillsById = (memberId) => {
    console.log(memberId);
    return this.voteService
      .getRecentBillsByMember(memberId)
      .subscribe((response: any) => {
        console.log(response);
        this.billsById = response.results[0].bills;
      });
  };

  displaySenate = () => {
    this.showHouseAndSenate = !this.showHouseAndSenate;
  };

  getAndSetMemberPosition = () => {
    return this.voteService
      .getMemberPosition(this.memberPositionId)
      .subscribe((response: any) => {
        console.log(response);
        this.memberPosition = response.results;
      });
  };
}
