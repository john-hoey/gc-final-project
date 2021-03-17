import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificBillsComponent } from './specific-bills.component';

describe('SpecificBillsComponent', () => {
  let component: SpecificBillsComponent;
  let fixture: ComponentFixture<SpecificBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
