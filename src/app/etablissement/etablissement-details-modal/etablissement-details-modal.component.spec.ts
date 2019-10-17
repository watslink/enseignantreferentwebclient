import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementDetailsModalComponent } from './etablissement-details-modal.component';

describe('EtablissementDetailsModalComponent', () => {
  let component: EtablissementDetailsModalComponent;
  let fixture: ComponentFixture<EtablissementDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
