import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementDeleteModalComponent } from './etablissement-delete-modal.component';

describe('EtablissementDeleteModalComponent', () => {
  let component: EtablissementDeleteModalComponent;
  let fixture: ComponentFixture<EtablissementDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
