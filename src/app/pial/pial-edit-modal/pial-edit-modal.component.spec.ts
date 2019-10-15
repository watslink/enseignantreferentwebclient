import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PialEditModalComponent } from './pial-edit-modal.component';

describe('PialEditModalComponent', () => {
  let component: PialEditModalComponent;
  let fixture: ComponentFixture<PialEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PialEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PialEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
