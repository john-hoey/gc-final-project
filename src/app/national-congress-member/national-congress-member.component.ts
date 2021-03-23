import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoteService } from '../vote.service';

@Component({
  selector: 'app-national-congress-member',
  templateUrl: './national-congress-member.component.html',
  styleUrls: ['./national-congress-member.component.css'],
})
export class NationalCongressMemberComponent implements OnInit {
  member!: any;
  candId: any;
  congressMember: any;
  constructor(
    private voteService: VoteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id: string | null = response.get('id');

      this.candId = id;
      if (id) {
        // this.getAndSetCongressMember(id);

        this.getAndSetLegislatorById();
      }
    });
  }

  // getAndSetCongressMember = (id: string): void => {
  //

  //   this.voteService.getCongressMember(id).subscribe((response: any) => {
  //
  //     this.member = response[0];
  //
  //   });
  // };

  getAndSetLegislatorById = () => {
    this.voteService
      .getLegislatorById(this.candId)
      .subscribe((response: any) => {
        this.congressMember = response.response.legislator['@attributes'];

        this.setGlobalPPId();
      });
  };
  showMemberPublicFinancialDisclosure = (id: number) => {
    this.router.navigate([`/national-congress/member-details/pfd/${id}`]);
  };

  setGlobalPPId = () => {
    this.voteService.setPPId(this.congressMember.bioguide_id);
  };
}
