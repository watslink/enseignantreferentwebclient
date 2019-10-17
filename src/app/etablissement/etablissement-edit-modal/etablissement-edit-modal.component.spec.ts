import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementEditModalComponent } from './etablissement-edit-modal.component';

describe('EtablissementEditModalComponent', () => {
  let component: EtablissementEditModalComponent;
  let fixture: ComponentFixture<EtablissementEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtablissementEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
