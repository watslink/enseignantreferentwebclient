import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-etablissement-delete-modal',
  templateUrl: './etablissement-delete-modal.component.html',
  styleUrls: ['./etablissement-delete-modal.component.css']
})
export class EtablissementDeleteModalComponent implements OnInit {

  etablissement: Etablissement;
  constructor(public modalRef: MDBModalRef, private etablissementServ: EtablissementService) { }
  ngOnInit() {
  }

  delete() {
    this.etablissementServ.deleteEtablissement(this.etablissement.etablissementId).subscribe();
    this.modalRef.hide();
  }
}
