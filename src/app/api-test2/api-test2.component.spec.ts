import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiTest2Component } from './api-test2.component';

describe('ApiTest2Component', () => {
  let component: ApiTest2Component;
  let fixture: ComponentFixture<ApiTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
