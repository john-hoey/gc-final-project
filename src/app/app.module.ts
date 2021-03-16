import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiTest2Component } from './api-test2/api-test2.component';
import { ApiTest3Component } from './api-test3/api-test3.component';
import { SearchLegislatorsComponent } from './search-legislators/search-legislators.component';
import { SearchStatementsComponent } from './search-statements/search-statements.component';
import { SearchBillsComponent } from './search-bills/search-bills.component';
import { ElectionInfoComponent } from './election-info/election-info.component';
import { SearchOrganizationsByNameComponent } from './search-organizations-by-name/search-organizations-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FourOhFourComponent,
    ApiTestComponent,
    HeaderComponent,
    FooterComponent,
    ApiTest2Component,
    ApiTest3Component,
    SearchLegislatorsComponent,
    SearchStatementsComponent,
    SearchBillsComponent,
    ElectionInfoComponent,
    SearchOrganizationsByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
