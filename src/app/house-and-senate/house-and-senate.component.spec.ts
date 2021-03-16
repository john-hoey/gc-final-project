import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseAndSenateComponent } from './house-and-senate.component';

describe('HouseAndSenateComponent', () => {
  let component: HouseAndSenateComponent;
  let fixture: ComponentFixture<HouseAndSenateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseAndSenateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseAndSenateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
