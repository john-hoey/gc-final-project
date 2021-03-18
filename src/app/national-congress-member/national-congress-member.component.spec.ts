import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCongressMemberComponent } from './national-congress-member.component';

describe('NationalCongressMemberComponent', () => {
  let component: NationalCongressMemberComponent;
  let fixture: ComponentFixture<NationalCongressMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalCongressMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalCongressMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
