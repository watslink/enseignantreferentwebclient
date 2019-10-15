import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureAddModalComponent } from './structure-add-modal.component';

describe('StructureAddModalComponent', () => {
  let component: StructureAddModalComponent;
  let fixture: ComponentFixture<StructureAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
