import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauDeleteModalComponent } from './niveau-delete-modal.component';

describe('NiveauDeleteModalComponent', () => {
  let component: NiveauDeleteModalComponent;
  let fixture: ComponentFixture<NiveauDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
