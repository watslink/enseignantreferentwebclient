import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantLegalDeleteModalComponent } from './representant-legal-delete-modal.component';

describe('RepresentantLegalDeleteModalComponent', () => {
  let component: RepresentantLegalDeleteModalComponent;
  let fixture: ComponentFixture<RepresentantLegalDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantLegalDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantLegalDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
