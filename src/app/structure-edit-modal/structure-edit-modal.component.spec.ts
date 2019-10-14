import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureEditModalComponent } from './structure-edit-modal.component';

describe('StructureEditModalComponent', () => {
  let component: StructureEditModalComponent;
  let fixture: ComponentFixture<StructureEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
