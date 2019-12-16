import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitializeRdvModalComponent } from './reinitialize-rdv-modal.component';

describe('ReinitializeRdvModalComponent', () => {
  let component: ReinitializeRdvModalComponent;
  let fixture: ComponentFixture<ReinitializeRdvModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitializeRdvModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitializeRdvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
