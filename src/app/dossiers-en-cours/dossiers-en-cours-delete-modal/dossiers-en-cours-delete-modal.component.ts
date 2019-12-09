import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {EleveService} from '../../../service/eleve.service';
import {Eleve} from '../../../model/Eleve.model';

@Component({
  selector: 'app-dossiers-en-cours-delete-modal',
  templateUrl: './dossiers-en-cours-delete-modal.component.html',
  styleUrls: ['./dossiers-en-cours-delete-modal.component.css']
})
export class DossiersEnCoursDeleteModalComponent implements OnInit {

  eleve: Eleve;

  constructor(public modalRef: MDBModalRef, private eleveServ: EleveService) {
  }

  ngOnInit() {
  }

  delete() {
    this.eleveServ.deleteEleve(this.eleve.eleveId).subscribe();
    this.modalRef.hide();
  }

}
