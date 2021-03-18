import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleCivicComponent } from './google-civic.component';

describe('GoogleCivicComponent', () => {
  let component: GoogleCivicComponent;
  let fixture: ComponentFixture<GoogleCivicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleCivicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleCivicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
