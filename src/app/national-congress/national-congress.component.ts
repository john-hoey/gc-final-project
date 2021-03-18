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
    this.getAndSetLegislatorsByState();
    this.getAndSetHouseAndSenate();
  }

  showMemberDetails = (id: number) => {
    console.log(id);
    this.router.navigate([`/national-congress/member-details/${id}`]);
    // console.log(id);
  };

  //OpenSecrets API Methods
  getAndSetLegislatorsByState = () => {
    console.log(this.state);

    this.voteService
      .getLegislatorsByState(this.state)
      .subscribe((response: any) => {
        this.stateLegislatorsOS = response.response.legislator;
        // console.log(this.stateLegislatorsOS);
      });
  };
  onLegislatorsByStateSearchSubmit = (stateId: string): void => {
    this.state = stateId;
    console.log(this.state);

    this.voteService
      .searchLegislatorsbyState(this.state)
      .subscribe((response: any) => {
        this.stateLegislatorData = response;
        // console.log(response);
        // console.log(this.stateLegislatorDataShown);
        this.congressionalDataArray = [];
        this.stateLegislatorsOS = [];
        this.houseDataByStatePP = [];
        this.senateDataByStatePP = [];
        this.congressDataByStatePP = [];
        this.getAndSetLegislatorsByState();
        this.getAndSetHouseAndSenate();
      });
  };

  // getAndSetCandSummaryById = () => {
  //   console.log(this.candId);
  //   this.voteService
  //     .getCandidateSummary(this.candId)
  //     .subscribe((response: any) => {
  //       console.log(response);
  //       this.candSummary = response.response.summary['@attributes'];
  //     });
  // };

  getAndSetCandTopContributorsById = () => {
    console.log(this.candId);
    this.voteService
      .getCandTopContributors(this.candId)
      .subscribe((response: any) => {
        console.log(
          response.response.contributors.contributor[0]['@attributes']
        );
        console.log(response);

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
          console.log(this.candTopContributor);
        }
      });
  };

  getAndSetTotalSectorContributionsByCandidate = () => {
    console.log(this.candId);
    this.voteService
      .getTotalSectorContributionsByCandidate(this.candId)
      .subscribe((response: any) => {
        console.log(response.response.sectors.sector[0]['@attributes']);
        console.log(response);

        this.candTopIndustries = response.response.sectors['@attributes'];
        for (let i = 0; i < response.response.sectors.sector.length; i++) {
          this.candTopIndustry.push(
            response.response.sectors.sector[i]['@attributes']
          );
          console.log(this.candTopIndustry);
        }
      });
  };

  getAndSetMemberPFD = () => {
    console.log(this.candId);
    this.voteService
      .getMemberPublicFinancialDisclosure(this.candId)
      .subscribe((response: any) => {
        console.log(response.response);
        console.log(response.response.member_profile['@attributes']);
        console.log(response.response.member_profile.assets.asset);
        console.log(response.response.member_profile.positions.position);
        console.log(response.response.member_profile.transactions.transaction);
        this.memberPFD = response.response.member_profile['@attributes'];
        for (
          let i = 0;
          i < response.response.member_profile.assets.asset.length;
          i++
        ) {
          this.memberPFDAssets.push(
            response.response.member_profile.assets.asset[i]['@attributes']
          );
          console.log(this.memberPFDAssets);
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
          console.log(this.memberPFDPositions);
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
          console.log(this.memberPFDTransactions);
        }
      });
  };

  // ProPublica API Methods
  getAndSetHouseAndSenate = () => {
    this.voteService.getHouse(this.state).subscribe((house: any) => {
      // console.log(response);

      this.houseDataByStatePP = house.results;
      // this.houseDataShownPP = this.houseData;
      // console.log(this.houseDataByStatePP);
      this.voteService.getSenate(this.state).subscribe((senate: any) => {
        this.senateDataByStatePP = senate.results;
        // this.senateDataShownPP = this.senateData;
        // console.log(this.senateDataByStatePP);
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
  };

  mergeHouseAndSenate = (array1: any, array2: any) => {
    this.congressDataByStatePP = array1.concat(array2);
    // console.log(this.congressDataByStatePP);
  };

  mergeOSAndPPArrays = (array1OS: any, array2PP: any) => {
    // console.log(array1[0]['@attributes'].bioguide_id, array2[0].id);

    array2PP.forEach((arr2PPItem) => {
      let foundOS = array1OS.find((arr1OSItem) => {
        return arr2PPItem.id === arr1OSItem['@attributes'].bioguide_id;
      });
      // console.log(foundOS);
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
    console.log(this.congressionalDataArray);
  };
}
