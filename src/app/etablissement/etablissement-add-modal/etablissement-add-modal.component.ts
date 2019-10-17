import {Component, OnInit} from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {Adresse} from '../../../model/Adresse.model';
import {PIAL} from '../../../model/PIAL.model';
import {PIALService} from '../../../service/PIAL.service';

@Component({
  selector: 'app-etablissement-add-modal',
  templateUrl: './etablissement-add-modal.component.html',
  styleUrls: ['./etablissement-add-modal.component.css']
})
export class EtablissementAddModalComponent implements OnInit {
  etablissement: Etablissement;
  pials: PIAL[];
  constructor(public modalRef: MDBModalRef, private etablissementServ: EtablissementService,
              private pialServ: PIALService) { }

  ngOnInit() {
    this.etablissement = new Etablissement();
    this.etablissement.adresse = new Adresse();
    this.etablissement.pial = new PIAL();
    this.pialServ.getListPIAL().subscribe( res => {
      this.pials = res;
    });
  }

  save() {
    this.etablissementServ.addEtablissement(this.etablissement).subscribe();
    this.modalRef.hide();
  }
}

