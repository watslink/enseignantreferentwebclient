import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentantLegalEditModalComponent } from './representant-legal-edit-modal.component';

describe('RepresentantLegalEditModalComponent', () => {
  let component: RepresentantLegalEditModalComponent;
  let fixture: ComponentFixture<RepresentantLegalEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentantLegalEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentantLegalEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
