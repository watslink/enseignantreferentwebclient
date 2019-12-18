import {Component, OnInit} from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {Adresse} from '../../../model/Adresse.model';
import {PIAL} from '../../../model/PIAL.model';
import {PIALService} from '../../../service/PIAL.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-etablissement-add-modal',
  templateUrl: './etablissement-add-modal.component.html',
  styleUrls: ['./etablissement-add-modal.component.css']
})
export class EtablissementAddModalComponent implements OnInit {
  etablissement: Etablissement;
  pials: PIAL[];
  constructor(public modalRef: MDBModalRef,
              private etablissementServ: EtablissementService,
              private pialServ: PIALService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.etablissement = new Etablissement();
    this.etablissement.adresse = new Adresse();
    this.etablissement.pial = null;
    this.pialServ.getListPIAL(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.pials = res;
    });
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.etablissement.enseignantReferent = res;
      this.etablissementServ.addEtablissement(this.etablissement).subscribe();
    });
    this.modalRef.hide();
  }

  compareFnPial(p1: PIAL, p2: PIAL): boolean {
    return p1 && p2 ? p1.pialId === p2.pialId : p1 === p2;
  }
}

