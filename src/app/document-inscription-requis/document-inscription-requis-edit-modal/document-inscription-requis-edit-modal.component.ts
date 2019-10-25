import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {DocumentInscriptionRequis} from '../../../model/DocumentInscriptionRequis.model';
import {DocumentInscriptionRequisService} from '../../../service/documentinscriptionrequis.service';

@Component({
  selector: 'app-document-inscription-requis-edit-modal',
  templateUrl: './document-inscription-requis-edit-modal.component.html',
  styleUrls: ['./document-inscription-requis-edit-modal.component.css']
})
export class DocumentInscriptionRequisEditModalComponent implements OnInit {
  documentInscriptionRequis: DocumentInscriptionRequis;
  constructor(public modalRef: MDBModalRef, private documentInscriptionRequisServ: DocumentInscriptionRequisService) { }

  ngOnInit() {
  }

  save() {
    console.log();
    this.documentInscriptionRequisServ.updateDocumentInscriptionRequis(this.documentInscriptionRequis).subscribe();
    this.modalRef.hide();
  }
}
