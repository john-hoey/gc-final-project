import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLegislatorsComponent } from './search-legislators.component';

describe('SearchLegislatorsComponent', () => {
  let component: SearchLegislatorsComponent;
  let fixture: ComponentFixture<SearchLegislatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLegislatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLegislatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
