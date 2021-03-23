import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-member-financial-disclosure',
  templateUrl: './member-financial-disclosure.component.html',
  styleUrls: ['./member-financial-disclosure.component.css'],
})
export class MemberFinancialDisclosureComponent implements OnInit {
  candId: any;
  memberPFD: any;
  memberPFDAssets: any[] = [];
  memberPFDTransactions: any[] = [];
  memberPFDPositions: any[] = [];
  candTopIndustries: any;
  candTopIndustry: any[] = [];
  showTopInd: boolean = false;
  candSummary: any;
  showCandSumm: boolean = false;
  candTopContributors: any;
  candTopContributor: any[] = [];
  showTopCont: boolean = false;
  constructor(
    private voteService: VoteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id: string | null = response.get('id');

      this.candId = id;
      if (id) {
        // this.getAndSetMemberPFD();
        this.getAndSetTotalSectorContributionsByCandidate();
        this.getAndSetCandSummaryById();
        this.getAndSetCandTopContributorsById();
        // this.getAndSetCongressMember(id);

        // this.getAndSetLegislatorById();
      }
    });
  }

  // getAndSetMemberPFD = () => {
  //
  //   this.voteService
  //     .getMemberPublicFinancialDisclosure(this.candId)
  //     .subscribe((response: any) => {
  //
  //       this.memberPFD = response.response.member_profile['@attributes'];
  //       if (response.response.member_profile.assets.asset) {
  //         for (
  //           let i = 0;
  //           i < response.response.member_profile.assets.asset.length;
  //           i++
  //         ) {
  //           this.memberPFDAssets.push(
  //             response.response.member_profile.assets.asset[i]['@attributes']
  //           );
  //
  //         }
  //       }
  //       if (response.response.member_profile.positions.position) {
  //         for (
  //           let i = 0;
  //           i < response.response.member_profile.positions.position.length;
  //           i++
  //         ) {
  //           this.memberPFDPositions.push(
  //             response.response.member_profile.positions.position[i][
  //               '@attributes'
  //             ]
  //           );
  //
  //         }
  //       }
  //       if (response.response.member_profile.transactions.transaction) {
  //         for (
  //           let i = 0;
  //           i <
  //           response.response.member_profile.transactions.transaction.length;
  //           i++
  //         ) {
  //           this.memberPFDTransactions.push(
  //             response.response.member_profile.transactions.transaction[i][
  //               '@attributes'
  //             ]
  //           );
  //
  //         }
  //       }
  //     });
  // };
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
  showCandSummary = () => {
    this.showCandSumm = !this.showCandSumm;
  };
  showTopIndustries = () => {
    this.showTopInd = !this.showTopInd;
  };
  showTopContributors = () => {
    this.showTopCont = !this.showTopCont;
  };

  getAndSetCandSummaryById = () => {
    this.voteService
      .getCandidateSummary(this.candId)
      .subscribe((response: any) => {
        this.candSummary = response.response.summary['@attributes'];
      });
  };

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
}
