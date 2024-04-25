import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExporterComponent } from './data-exporter.component';

describe('DataExporterComponent', () => {
  let component: DataExporterComponent;
  let fixture: ComponentFixture<DataExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataExporterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
