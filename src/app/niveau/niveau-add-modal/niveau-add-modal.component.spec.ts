import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauAddModalComponent } from './niveau-add-modal.component';

describe('NiveauAddModalComponent', () => {
  let component: NiveauAddModalComponent;
  let fixture: ComponentFixture<NiveauAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiveauAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiveauAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
