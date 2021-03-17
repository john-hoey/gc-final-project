import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-api-test2',
  templateUrl: './api-test2.component.html',
  styleUrls: ['./api-test2.component.css'],
})
export class ApiTest2Component implements OnInit {
  // @Input() legislatorRef: any;
  state: string = 'MI';
  legislators: any;
  stateLegislatorData: any;
  stateLegislatorDataShown: any;
  contributingInds: any;
  candidateId: string = 'N00039533';
  organizations: any;
  organization: any;
  organizationName: string = 'cash';
  orgData: any;
  orgDataShown: any;
  orgId: string = 'D000000082';
  candId: string = 'N00007360';
  candSummary: any;
  candTopContributors: any;
  candTopContributor: any[] = [];
  candTopIndustries: any;
  candTopIndustry: any[] = [];
  cmteId: string = 'HBUD';
  indCode: string = 'E01';
  cmteSummary: any;
  cmteMembers: any[] = [];
  memberPFD: any;
  memberPFDAssets: any[] = [];
  memberPFDTransactions: any[] = [];
  memberPFDPositions: any[] = [];

  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    // this.getAndSetLegislators();
    // this.getAndSetTop10ContributingIndByCandidate();
    // this.getAndSetOrgsByName();
    // this.onOrgsByNameSearchSubmit('cash');
    // this.getAndSetOrgSummaryById();
    // this.getAndSetCandSummaryById();
    // this.getAndSetCandTopContributorsById();
    // this.getAndSetTotalSectorContributionsByCandidate();
    // this.getAndSetCommitteeIndustryContributionsSummary();
    this.getAndSetMemberPFD();
  }
  getAndSetLegislators = () => {
    this.voteService.getLegislators(this.state).subscribe((response: any) => {
      console.log(response.response.legislator[0]['@attributes']);
      this.legislators = response.response.legislator;
    });
  };

  getAndSetTop10ContributingIndByCandidate = () => {
    this.voteService
      .getTop10ContributingIndByCandidate(this.candidateId)
      .subscribe((response: any) => {
        console.log(response.response.industries);
        console.log(response.response.industries.industry);
        this.contributingInds = response.response.industries.industry;
      });
  };

  getAndSetOrgsByName = () => {
    console.log(this.organizationName);

    this.voteService
      .getOrgsByName(this.organizationName)
      .subscribe((response: any) => {
        console.log(response.response.organization);
        // console.log(response.response.organization['@attributes']);
        this.organizations = response.response.organization;
      });
  };

  getAndSetOrgSummaryById = () => {
    console.log(this.orgId);
    this.voteService
      .getOrgSummaryById(this.orgId)
      .subscribe((response: any) => {
        console.log(response.response.organization['@attributes']);
        this.organization = response.response.organization['@attributes'];
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

  getAndSetCommitteeIndustryContributionsSummary = () => {
    console.log(this.cmteId);
    console.log(this.indCode);

    this.voteService
      .getCongCmteIndus(this.cmteId, this.indCode)
      .subscribe((response: any) => {
        console.log(response.response.committee['@attributes']);
        console.log(response.response.committee.member);

        this.cmteSummary = response.response.committee['@attributes'];
        for (let i = 0; i < response.response.committee.member.length; i++) {
          this.cmteMembers.push(
            response.response.committee.member[i]['@attributes']
          );
          console.log(this.cmteSummary);
          console.log(this.cmteMembers);
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

  onLegislatorsByStateSearchSubmit = (stateId: string): void => {
    this.state = stateId;
    this.voteService
      .searchLegislatorsbyState(stateId)
      .subscribe((response: any) => {
        this.stateLegislatorData = response;
        console.log(response);
        // console.log(this.stateLegislatorDataShown);
        this.getAndSetLegislators();
      });
  };
  onOrgsByNameSearchSubmit = (orgNameSearchTerm: string): void => {
    this.organizationName = orgNameSearchTerm;
    this.voteService
      .searchOrgsByName(this.organizationName)
      .subscribe((response: any) => {
        this.orgData = response.response.organization;
        console.log(response.response.organization);
        this.getAndSetOrgsByName();
      });
  };
}
