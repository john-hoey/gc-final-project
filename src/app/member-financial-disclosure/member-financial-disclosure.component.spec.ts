import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFinancialDisclosureComponent } from './member-financial-disclosure.component';

describe('MemberFinancialDisclosureComponent', () => {
  let component: MemberFinancialDisclosureComponent;
  let fixture: ComponentFixture<MemberFinancialDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberFinancialDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFinancialDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
