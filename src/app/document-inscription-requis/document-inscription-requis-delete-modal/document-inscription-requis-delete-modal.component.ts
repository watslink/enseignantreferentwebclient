import { Component, OnInit } from '@angular/core';
import {DocumentInscriptionRequis} from '../../../model/DocumentInscriptionRequis.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {DocumentInscriptionRequisService} from '../../../service/documentinscriptionrequis.service';


@Component({
  selector: 'app-document-inscription-requis-delete-modal',
  templateUrl: './document-inscription-requis-delete-modal.component.html',
  styleUrls: ['./document-inscription-requis-delete-modal.component.css']
})
export class DocumentInscriptionRequisDeleteModalComponent implements OnInit {

  documentInscriptionRequis: DocumentInscriptionRequis;
  constructor(public modalRef: MDBModalRef, private documentInscriptionRequisServ: DocumentInscriptionRequisService) { }
  ngOnInit() {
  }

  delete() {
    this.documentInscriptionRequisServ.deleteDocumentInscriptionRequis(this.documentInscriptionRequis.documentInscriptionRequisId).subscribe();
    this.modalRef.hide();
  }
}
