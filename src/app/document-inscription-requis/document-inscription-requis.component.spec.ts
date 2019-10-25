import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentInscriptionRequisComponent } from './document-inscription-requis.component';

describe('DocumentInscriptionRequisComponent', () => {
  let component: DocumentInscriptionRequisComponent;
  let fixture: ComponentFixture<DocumentInscriptionRequisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentInscriptionRequisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentInscriptionRequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
