import {Component, Input, OnInit} from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';
import {Niveau} from '../../../model/Niveau.model';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {EleveService} from '../../../service/eleve.service';
import {NiveauService} from '../../../service/niveau.service';
import {EtablissementService} from '../../../service/etablissement.service';
import {EtablissementAddModalComponent} from '../../etablissement/etablissement-add-modal/etablissement-add-modal.component';
import {AESH} from '../../../model/AESH.model';
import {AESHService} from '../../../service/AESH.service';
import {AeshAddModalComponent} from '../../aesh/aesh-add-modal/aesh-add-modal.component';

@Component({
  selector: 'app-eleve-edit',
  templateUrl: './eleve-edit.component.html',
  styleUrls: ['./eleve-edit.component.css']
})
export class EleveEditComponent implements OnInit {

  eleve: Eleve;
  niveaux: Niveau[];
  etablissements: Etablissement[];
  aeshs: AESH[];
  modalRef: MDBModalRef;
  constructor(private eleveServ: EleveService,
              private niveauServ: NiveauService,
              private etablissementServ: EtablissementService,
              private aeshServ: AESHService,
              private modalService: MDBModalService) { }

  ngOnInit() {
    this.eleve = history.state;
    this.niveauServ.getListNiveau(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.niveaux = res;
    });
    this.etablissementServ.getListEtablissement(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.etablissements = res;
    });
    this.aeshServ.getListAESH(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.aeshs = res;
    });
  }

  save() {
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }

  openModalAddEtablissement() {
    this.modalRef = this.modalService.show(EtablissementAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.etablissementServ.getListEtablissement(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
        this.etablissements = res2;
      });
    });
  }
  openModalAddAesh() {
    this.modalRef = this.modalService.show(AeshAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.aeshServ.getListAESH(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
        this.aeshs = res2;
      });
    });
  }

  compareFnAesh(a1: AESH, a2: AESH): boolean {
    return a1 && a2 ? a1.aeshId === a2.aeshId : a1 === a2;
  }
  compareFnEtablissement(e1: Etablissement, e2: Etablissement): boolean {
    return e1 && e2 ? e1.etablissementId === e2.etablissementId : e1 === e2;
  }

}

