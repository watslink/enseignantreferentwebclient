import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantLegalAddModalComponent } from './representant-legal-add-modal.component';

describe('RepresentantLegalAddModalComponent', () => {
  let component: RepresentantLegalAddModalComponent;
  let fixture: ComponentFixture<RepresentantLegalAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantLegalAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantLegalAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
