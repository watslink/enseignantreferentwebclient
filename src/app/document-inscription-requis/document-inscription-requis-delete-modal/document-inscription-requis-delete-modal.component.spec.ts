import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInscriptionRequisDeleteModalComponent } from './document-inscription-requis-delete-modal.component';

describe('DocumentInscriptionRequisDeleteModalComponent', () => {
  let component: DocumentInscriptionRequisDeleteModalComponent;
  let fixture: ComponentFixture<DocumentInscriptionRequisDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInscriptionRequisDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInscriptionRequisDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
