import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMembersByAddressComponent } from './search-members-by-address.component';

describe('SearchMembersByAddressComponent', () => {
  let component: SearchMembersByAddressComponent;
  let fixture: ComponentFixture<SearchMembersByAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMembersByAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMembersByAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
