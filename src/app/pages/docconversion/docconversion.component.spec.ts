import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocconversionComponent } from './docconversion.component';

describe('DocconversionComponent', () => {
  let component: DocconversionComponent;
  let fixture: ComponentFixture<DocconversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocconversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocconversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
