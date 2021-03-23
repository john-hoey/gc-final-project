import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-national-congress',
  templateUrl: './national-congress.component.html',
  styleUrls: ['./national-congress.component.css'],
})
export class NationalCongressComponent implements OnInit {
  state: string = 'MI';

  //OpenSecrets Variables
  //getAndSetStateLegislatorsById
  stateLegislatorsOS: any[] = [];
  stateLegislatorData: any;
  candId: string = 'N00007360'; //needs method to set this based on the candidate we are looking at
  candSummary: any;
  candTopContributors: any;
  candTopContributor: any[] = [];
  candTopIndustries: any;
  candTopIndustry: any[] = [];
  memberPFD: any;
  memberPFDAssets: any[] = [];
  memberPFDTransactions: any[] = [];
  memberPFDPositions: any[] = [];

  //ProPublica Variables
  senateDataByStatePP: any;
  senateDataShownByStatePP: any;
  houseDataByStatePP: any;
  houseDataShownByStatePP: any;
  congressDataByStatePP: any[] = [];

  //joint array
  congressionalDataArray: any[] = [];

  constructor(private voteService: VoteService, private router: Router) {}

  ngOnInit(): void {
    // this.getAndSetLegislatorsByState();
    this.getAndSetLegislatorsByStateAndGetAndSetHouseAndSenate();
  }

  showMemberDetails = (id: number) => {
    this.router.navigate([`/national-congress/member-details/${id}`]);
  };

  //OpenSecrets API Methods
  getAndSetLegislatorsByState = () => {
    this.voteService
      .getLegislatorsByState(this.state)
      .subscribe((response: any) => {
        this.stateLegislatorsOS = response.response.legislator;
      });
  };
  onLegislatorsByStateSearchSubmit = (stateId: string): void => {
    this.state = stateId;

    this.voteService
      .searchLegislatorsbyState(this.state)
      .subscribe((response: any) => {
        this.stateLegislatorData = response;

        this.congressionalDataArray = [];
        this.stateLegislatorsOS = [];
        this.houseDataByStatePP = [];
        this.senateDataByStatePP = [];
        this.congressDataByStatePP = [];
        // this.getAndSetLegislatorsByState();
        this.getAndSetLegislatorsByStateAndGetAndSetHouseAndSenate();
      });
  };

  // getAndSetCandSummaryById = () => {
  //
  //   this.voteService
  //     .getCandidateSummary(this.candId)
  //     .subscribe((response: any) => {
  //
  //       this.candSummary = response.response.summary['@attributes'];
  //     });
  // };

  getAndSetCandTopContributorsById = () => {
    this.voteService
      .getCandTopContributors(this.candId)
      .subscribe((response: any) => {
        this.candTopContributors =
          response.response.contributors['@attributes'];
        for (
          let i = 0;
          i < response.response.contributors.contributor.length;
          i++
        ) {
          this.candTopContributor.push(
            response.response.contributors.contributor[i]['@attributes']
          );
        }
      });
  };

  getAndSetTotalSectorContributionsByCandidate = () => {
    this.voteService
      .getTotalSectorContributionsByCandidate(this.candId)
      .subscribe((response: any) => {
        this.candTopIndustries = response.response.sectors['@attributes'];
        for (let i = 0; i < response.response.sectors.sector.length; i++) {
          this.candTopIndustry.push(
            response.response.sectors.sector[i]['@attributes']
          );
        }
      });
  };

  getAndSetMemberPFD = () => {
    this.voteService
      .getMemberPublicFinancialDisclosure(this.candId)
      .subscribe((response: any) => {
        this.memberPFD = response.response.member_profile['@attributes'];
        for (
          let i = 0;
          i < response.response.member_profile.assets.asset.length;
          i++
        ) {
          this.memberPFDAssets.push(
            response.response.member_profile.assets.asset[i]['@attributes']
          );
        }
        for (
          let i = 0;
          i < response.response.member_profile.positions.position.length;
          i++
        ) {
          this.memberPFDPositions.push(
            response.response.member_profile.positions.position[i][
              '@attributes'
            ]
          );
        }
        for (
          let i = 0;
          i < response.response.member_profile.transactions.transaction.length;
          i++
        ) {
          this.memberPFDTransactions.push(
            response.response.member_profile.transactions.transaction[i][
              '@attributes'
            ]
          );
        }
      });
  };

  // ProPublica API Methods
  getAndSetLegislatorsByStateAndGetAndSetHouseAndSenate = () => {
    this.voteService.getHouse(this.state).subscribe((house: any) => {
      this.houseDataByStatePP = house.results;
      // this.houseDataShownPP = this.houseData;

      this.voteService.getSenate(this.state).subscribe((senate: any) => {
        this.senateDataByStatePP = senate.results;
        // this.senateDataShownPP = this.senateData;

        this.voteService
          .getLegislatorsByState(this.state)
          .subscribe((response: any) => {
            this.stateLegislatorsOS = response.response.legislator;

            this.mergeHouseAndSenate(
              this.houseDataByStatePP,
              this.senateDataByStatePP
            );
            this.mergeOSAndPPArrays(
              this.stateLegislatorsOS,
              this.congressDataByStatePP
            );
          });
      });
    });
  };

  mergeHouseAndSenate = (array1: any, array2: any) => {
    this.congressDataByStatePP = array1.concat(array2);
  };

  mergeOSAndPPArrays = (array1OS: any, array2PP: any) => {
    array2PP.forEach((arr2PPItem) => {
      let foundOS = array1OS.find((arr1OSItem) => {
        return arr2PPItem.id === arr1OSItem['@attributes'].bioguide_id;
      });

      let merged: any = {};
      if (foundOS) {
        merged = {
          ...arr2PPItem,
          ...foundOS['@attributes'],
        };
      } else {
        merged = {
          ...arr2PPItem,
        };
      }

      this.congressionalDataArray.push(merged);
    });
  };
}
