import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCongressComponent } from './national-congress.component';

describe('NationalCongressComponent', () => {
  let component: NationalCongressComponent;
  let fixture: ComponentFixture<NationalCongressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalCongressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalCongressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
