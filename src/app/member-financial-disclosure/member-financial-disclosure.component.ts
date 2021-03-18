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
  candSummary: any;
  candTopContributors: any;
  candTopContributor: any[] = [];
  constructor(
    private voteService: VoteService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id: string | null = response.get('id');
      console.log(id);
      this.candId = id;
      if (id) {
        // this.getAndSetMemberPFD();
        this.getAndSetTotalSectorContributionsByCandidate();
        this.getAndSetCandSummaryById();
        this.getAndSetCandTopContributorsById();
        // this.getAndSetCongressMember(id);
        // console.log(response);
        // this.getAndSetLegislatorById();
      }
    });
  }

  // getAndSetMemberPFD = () => {
  //   console.log(this.candId);
  //   this.voteService
  //     .getMemberPublicFinancialDisclosure(this.candId)
  //     .subscribe((response: any) => {
  //       // console.log(response.response);
  //       console.log(response.response.member_profile);
  //       // console.log(response.response.member_profile.assets.asset);
  //       // console.log(response.response.member_profile.positions.position);
  //       // console.log(response.response.member_profile.transactions.transaction);
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
  //           console.log(this.memberPFDAssets);
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
  //           console.log(this.memberPFDPositions);
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
  //           console.log(this.memberPFDTransactions);
  //         }
  //       }
  //     });
  // };
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
}
