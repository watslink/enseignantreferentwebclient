import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantLegalDetailsModalComponent } from './representant-legal-details-modal.component';

describe('RepresentantLegalDetailsModalComponent', () => {
  let component: RepresentantLegalDetailsModalComponent;
  let fixture: ComponentFixture<RepresentantLegalDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantLegalDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantLegalDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
