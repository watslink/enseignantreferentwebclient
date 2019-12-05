import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {Eleve} from '../../../model/Eleve.model';
import {EleveService} from '../../../service/eleve.service';

@Component({
  selector: 'app-dossiers-en-cours-validate-modal',
  templateUrl: './dossiers-en-cours-validate-modal.component.html',
  styleUrls: ['./dossiers-en-cours-validate-modal.component.css']
})
export class DossiersEnCoursValidateModalComponent implements OnInit {

  eleve: Eleve;
  constructor(public modalRef: MDBModalRef, private eleveServ: EleveService) { }
  ngOnInit() {
  }

  validate() {
    this.eleveServ.validateInscription(this.eleve).subscribe();
    this.modalRef.hide();
  }
}
