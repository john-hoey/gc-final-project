import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsByMemberComponent } from './bills-by-member.component';

describe('BillsByMemberComponent', () => {
  let component: BillsByMemberComponent;
  let fixture: ComponentFixture<BillsByMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsByMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsByMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
