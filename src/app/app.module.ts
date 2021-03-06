import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SearchLegislatorsComponent } from './search-legislators/search-legislators.component';
import { SearchStatementsComponent } from './search-statements/search-statements.component';
import { SearchBillsComponent } from './search-bills/search-bills.component';
import { ElectionInfoComponent } from './election-info/election-info.component';
import { SearchOrganizationsByNameComponent } from './search-organizations-by-name/search-organizations-by-name.component';
import { HouseAndSenateComponent } from './house-and-senate/house-and-senate.component';
import { SpecificBillsComponent } from './specific-bills/specific-bills.component';
import { BillsFromMemberComponent } from './bills-from-member/bills-from-member.component';
import { SearchMembersByAddressComponent } from './search-members-by-address/search-members-by-address.component';
import { GoogleCivicComponent } from './google-civic/google-civic.component';
import { NationalCongressComponent } from './national-congress/national-congress.component';
import { MemberPositionComponent } from './member-position/member-position.component';
import { NationalCongressMemberComponent } from './national-congress-member/national-congress-member.component';
import { MemberFinancialDisclosureComponent } from './member-financial-disclosure/member-financial-disclosure.component';
import { BillsByMemberComponent } from './bills-by-member/bills-by-member.component';
import { BillInfoComponent } from './bill-info/bill-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOhFourComponent,

    HeaderComponent,
    FooterComponent,

    SearchLegislatorsComponent,
    SearchStatementsComponent,
    SearchBillsComponent,
    ElectionInfoComponent,
    SearchOrganizationsByNameComponent,
    HouseAndSenateComponent,
    SpecificBillsComponent,
    BillsFromMemberComponent,
    SearchMembersByAddressComponent,
    GoogleCivicComponent,
    NationalCongressComponent,
    MemberPositionComponent,
    NationalCongressMemberComponent,
    MemberFinancialDisclosureComponent,
    BillsByMemberComponent,
    BillInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BillsFromMemberComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
