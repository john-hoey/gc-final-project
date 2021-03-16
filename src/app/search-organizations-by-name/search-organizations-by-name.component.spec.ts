import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganizationsByNameComponent } from './search-organizations-by-name.component';

describe('SearchOrganizationsByNameComponent', () => {
  let component: SearchOrganizationsByNameComponent;
  let fixture: ComponentFixture<SearchOrganizationsByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrganizationsByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrganizationsByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
