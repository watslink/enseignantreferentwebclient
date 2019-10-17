import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauEditModalComponent } from './niveau-edit-modal.component';

describe('NiveauEditModalComponent', () => {
  let component: NiveauEditModalComponent;
  let fixture: ComponentFixture<NiveauEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
