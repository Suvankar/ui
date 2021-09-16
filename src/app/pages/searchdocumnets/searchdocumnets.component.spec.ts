import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocumnetsComponent } from './searchdocumnets.component';

describe('SearchdocumnetsComponent', () => {
  let component: SearchdocumnetsComponent;
  let fixture: ComponentFixture<SearchdocumnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchdocumnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocumnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
