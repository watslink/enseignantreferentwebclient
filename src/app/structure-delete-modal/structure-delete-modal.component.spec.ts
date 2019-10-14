import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDeleteModalComponent } from './structure-delete-modal.component';

describe('StructureDeleteModalComponent', () => {
  let component: StructureDeleteModalComponent;
  let fixture: ComponentFixture<StructureDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
