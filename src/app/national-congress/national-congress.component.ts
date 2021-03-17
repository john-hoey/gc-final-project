import { Component, OnInit } from '@angular/core';
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
  congressDataByStatePP: any;

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.getAndSetLegislatorsByState();
    this.getAndSetHouseAndSenate();
  }
  //OpenSecrets API Methods
  getAndSetLegislatorsByState = () => {
    this.voteService.getLegislators(this.state).subscribe((response: any) => {
      this.stateLegislatorsOS = response.response.legislator;
      console.log(this.stateLegislatorsOS);
    });
  };
  onLegislatorsByStateSearchSubmit = (stateId: string): void => {
    this.state = stateId;
    this.voteService
      .searchLegislatorsbyState(this.state)
      .subscribe((response: any) => {
        this.stateLegislatorData = response;
        // console.log(response);
        // console.log(this.stateLegislatorDataShown);
        this.getAndSetLegislatorsByState();
      });
  };

  getAndSetCandSummaryById = () => {
    console.log(this.candId);
    this.voteService
      .getCandidateSummary(this.candId)
      .subscribe((response: any) => {
        console.log(response);
        this.candSummary = response.response.summary['@attributes'];
      });
  };

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
    this.voteService.getHouse(this.state).subscribe((response: any) => {
      // console.log(response);

      this.houseDataByStatePP = response.results;
      // this.houseDataShownPP = this.houseData;
      console.log(this.houseDataByStatePP);
    });
    this.voteService.getSenate(this.state).subscribe((response: any) => {
      this.senateDataByStatePP = response.results;
      // this.senateDataShownPP = this.senateData;
      console.log(this.senateDataByStatePP);
    });
  };

  mergeHouseAndSenate = () => {
    this.congressDataByStatePP;
  };
}
