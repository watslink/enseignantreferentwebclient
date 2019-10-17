import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementAddModalComponent } from './etablissement-add-modal.component';

describe('EtablissementAddModalComponent', () => {
  let component: EtablissementAddModalComponent;
  let fixture: ComponentFixture<EtablissementAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
