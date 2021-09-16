import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertJsonCsvComponent } from './convert-json-csv.component';

describe('ConvertJsonCsvComponent', () => {
  let component: ConvertJsonCsvComponent;
  let fixture: ComponentFixture<ConvertJsonCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertJsonCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertJsonCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
