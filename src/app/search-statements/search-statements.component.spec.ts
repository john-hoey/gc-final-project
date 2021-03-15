import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStatementsComponent } from './search-statements.component';

describe('SearchStatementsComponent', () => {
  let component: SearchStatementsComponent;
  let fixture: ComponentFixture<SearchStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStatementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
