import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInscriptionRequisEditModalComponent } from './document-inscription-requis-edit-modal.component';

describe('DocumentInscriptionRequisEditModalComponent', () => {
  let component: DocumentInscriptionRequisEditModalComponent;
  let fixture: ComponentFixture<DocumentInscriptionRequisEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInscriptionRequisEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInscriptionRequisEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
