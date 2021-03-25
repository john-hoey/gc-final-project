import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillInfoComponent } from './bill-info/bill-info.component';
import { BillsByMemberComponent } from './bills-by-member/bills-by-member.component';

import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GoogleCivicComponent } from './google-civic/google-civic.component';
import { HomeComponent } from './home/home.component';
import { MemberFinancialDisclosureComponent } from './member-financial-disclosure/member-financial-disclosure.component';
import { NationalCongressMemberComponent } from './national-congress-member/national-congress-member.component';
import { NationalCongressComponent } from './national-congress/national-congress.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'national-congress', component: NationalCongressComponent },
  {
    path: 'national-congress/member-details/:id',
    component: NationalCongressMemberComponent,
  },
  {
    path: 'national-congress/member-details/pfd/:id',
    component: MemberFinancialDisclosureComponent,
  },

  { path: 'google-civic', component: GoogleCivicComponent },
  { path: 'bills-by-member', component: BillsByMemberComponent },
  { path: 'bill-info', component: BillInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: FourOhFourComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
