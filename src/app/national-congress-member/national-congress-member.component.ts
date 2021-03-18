import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      let id: string | null = response.get('id');
      console.log(id);
      this.candId = id;
      if (id) {
        this.getAndSetCongressMember(id);
        console.log(response);
        this.getAndSetLegislatorById();
      }
    });
  }

  getAndSetCongressMember = (id: string): void => {
    console.log(id);

    this.voteService.getCongressMember(id).subscribe((response: any) => {
      console.log(response);
      this.member = response[0];
      console.log(this.member);
    });
  };

  getAndSetLegislatorById = () => {
    console.log(this.candId);

    this.voteService
      .getLegislatorById(this.candId)
      .subscribe((response: any) => {
        this.congressMember = response.response.legislator['@attributes'];
        console.log(this.congressMember);

        // console.log(this.stateLegislatorsOS);
      });
  };
}
