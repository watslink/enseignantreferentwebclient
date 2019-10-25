import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInscriptionRequisAddModalComponent } from './document-inscription-requis-add-modal.component';

describe('DocumentInscriptionRequisAddModalComponent', () => {
  let component: DocumentInscriptionRequisAddModalComponent;
  let fixture: ComponentFixture<DocumentInscriptionRequisAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInscriptionRequisAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInscriptionRequisAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
