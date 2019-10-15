import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDetailsModalComponent } from './structure-details-modal.component';

describe('StructureDetailsModalComponent', () => {
  let component: StructureDetailsModalComponent;
  let fixture: ComponentFixture<StructureDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
