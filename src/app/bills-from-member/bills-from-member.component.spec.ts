import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsFromMemberComponent } from './bills-from-member.component';

describe('BillsFromMemberComponent', () => {
  let component: BillsFromMemberComponent;
  let fixture: ComponentFixture<BillsFromMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsFromMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsFromMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
