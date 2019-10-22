import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Etablissement} from '../../../model/Etablissement.model';
import {EtablissementService} from '../../../service/etablissement.service';
import {PIALService} from '../../../service/PIAL.service';
import {PIAL} from '../../../model/PIAL.model';

@Component({
  selector: 'app-etablissement-edit-modal',
  templateUrl: './etablissement-edit-modal.component.html',
  styleUrls: ['./etablissement-edit-modal.component.css']
})
export class EtablissementEditModalComponent implements OnInit {
  etablissement: Etablissement;
  pials: PIAL[];
  constructor(public modalRef: MDBModalRef, private etablissementServ: EtablissementService,
              private pialServ: PIALService) { }

  ngOnInit() {
    this.pialServ.getListPIAL(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.pials = res;
    });
  }

  save() {
    this.etablissementServ.updateEtablissement(this.etablissement).subscribe();
    this.modalRef.hide();
  }
}
