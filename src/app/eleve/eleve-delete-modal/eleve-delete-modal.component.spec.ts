import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveDeleteModalComponent } from './eleve-delete-modal.component';

describe('EleveDeleteModalComponent', () => {
  let component: EleveDeleteModalComponent;
  let fixture: ComponentFixture<EleveDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleveDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleveDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
