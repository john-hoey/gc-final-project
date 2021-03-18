import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiTestComponent } from './api-test/api-test.component';
import { ApiTest2Component } from './api-test2/api-test2.component';
import { ApiTest3Component } from './api-test3/api-test3.component';
import { BillsByMemberComponent } from './bills-by-member/bills-by-member.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GoogleCivicComponent } from './google-civic/google-civic.component';
import { HomeComponent } from './home/home.component';
import { MemberFinancialDisclosureComponent } from './member-financial-disclosure/member-financial-disclosure.component';
import { NationalCongressMemberComponent } from './national-congress-member/national-congress-member.component';
import { NationalCongressComponent } from './national-congress/national-congress.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'api-test', component: ApiTestComponent },
  { path: 'api-test3', component: ApiTest3Component },
  { path: 'national-congress', component: NationalCongressComponent },
  {
    path: 'member-details/:id',
    component: NationalCongressMemberComponent,
  },
  {
    path: 'member-details/pfd/:id',
    component: MemberFinancialDisclosureComponent,
  },

  { path: 'google-civic', component: GoogleCivicComponent },
  { path: 'bills-by-member', component: BillsByMemberComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
