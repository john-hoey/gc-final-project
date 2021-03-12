import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTest3Component } from './api-test3.component';

describe('ApiTest3Component', () => {
  let component: ApiTest3Component;
  let fixture: ComponentFixture<ApiTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
