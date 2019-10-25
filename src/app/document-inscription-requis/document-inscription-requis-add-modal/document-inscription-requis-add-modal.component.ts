import {Component, OnInit} from '@angular/core';
import {DocumentInscriptionRequis} from '../../../model/DocumentInscriptionRequis.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {DocumentInscriptionRequisService} from '../../../service/documentinscriptionrequis.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-document-inscription-requis-add-modal',
  templateUrl: './document-inscription-requis-add-modal.component.html',
  styleUrls: ['./document-inscription-requis-add-modal.component.css']
})
export class DocumentInscriptionRequisAddModalComponent implements OnInit {
  documentInscriptionRequis: DocumentInscriptionRequis;
  constructor(public modalRef: MDBModalRef,
              private documentInscriptionRequisServ: DocumentInscriptionRequisService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.documentInscriptionRequis = new DocumentInscriptionRequis();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.documentInscriptionRequis.enseignantReferent = res;
      this.documentInscriptionRequisServ.addDocumentInscriptionRequis(this.documentInscriptionRequis).subscribe();
    });
    this.modalRef.hide();
  }
}

