import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocumentsComponent } from './viewdocuments.component';

describe('ViewdocumentsComponent', () => {
  let component: ViewdocumentsComponent;
  let fixture: ComponentFixture<ViewdocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
