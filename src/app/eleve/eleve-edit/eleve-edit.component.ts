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
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
// tslint:disable-next-line:max-line-length
import {RepresentantLegalAddModalComponent} from '../../representant-legal/representant-legal-add-modal/representant-legal-add-modal.component';
// tslint:disable-next-line:max-line-length
import {RepresentantLegalDetailsModalComponent} from '../../representant-legal/representant-legal-details-modal/representant-legal-details-modal.component';
import {RepresentantLegalService} from '../../../service/representantlegal.service';
// tslint:disable-next-line:max-line-length
import {RepresentantLegalDeleteModalComponent} from '../../representant-legal/representant-legal-delete-modal/representant-legal-delete-modal.component';
// tslint:disable-next-line:max-line-length
import {RepresentantLegalEditModalComponent} from '../../representant-legal/representant-legal-edit-modal/representant-legal-edit-modal.component';
import {Structure} from '../../../model/Structure.model';
import {MaterielPedagoAdapte} from '../../../model/MaterielPedagoAdapte.model';
import {StructureService} from '../../../service/structure.service';
import {MaterielPedagoAdapteService} from '../../../service/materielPedagoAdapte.service';
// tslint:disable-next-line:max-line-length
import {MaterielPedagoAdapteAddModalComponent} from '../../materiel-pedago-adapte/materiel-pedago-adapte-add-modal/materiel-pedago-adapte-add-modal.component';
import {EleveStructure} from '../../../model/EleveStructure.model';
import {StructureAddModalComponent} from '../../structure/structure-add-modal/structure-add-modal.component';
import {Location} from '@angular/common';


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
  structures: Structure[];
  structureAdd: Structure;
  dateStructureAdd: Date;
  materiels: MaterielPedagoAdapte[];
  materielAdd: MaterielPedagoAdapte;
  modalRef: MDBModalRef;
  fapencil = faPencilAlt;
  fadelete = faTimes;
  facard = faAddressCard;
  constructor(private eleveServ: EleveService,
              private niveauServ: NiveauService,
              private etablissementServ: EtablissementService,
              private aeshServ: AESHService,
              private structureServ: StructureService,
              private materielServ: MaterielPedagoAdapteService,
              private representantLegalServ: RepresentantLegalService,
              private modalService: MDBModalService,
              private location: Location
              ) { }

  ngOnInit() {
    this.eleve = history.state;
    this.materielAdd = null;
    this.structureAdd = null;
    this.dateStructureAdd = null;
    this.niveauServ.getListNiveau(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.niveaux = res;
    });
    this.etablissementServ.getListEtablissement(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.etablissements = res;
    });
    this.aeshServ.getListAESH(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.aeshs = res;
    });
    this.structureServ.getListStructure(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.structures = res;
    });
    this.materielServ.getListMaterielPedagoAdapte(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.materiels = res;
    });
  }

  save() {
    this.eleveServ.updateEleve(this.eleve).subscribe();
    this.location.back();
  }

  back() {
    this.location.back();
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
  compareFnNiveau(n1: Niveau, n2: Niveau): boolean {
    return n1 && n2 ? n1.niveauId === n2.niveauId : n1 === n2;
  }

  openModalRLDetails(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalDetailsModalComponent, {data: {representantLegal: element}});
  }
  openModalRLEdit(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalEditModalComponent, {data: {representantLegal: element, eleve: this.eleve}});
  }
  openModalRLDelete(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalDeleteModalComponent, {data: {representantLegal: element, eleve: this.eleve}});
  }
  openModalRLAdd() {
    this.modalRef = this.modalService.show(RepresentantLegalAddModalComponent, {data: {eleve: this.eleve}});
  }

  openModalAddMateriel() {
    this.modalRef = this.modalService.show(MaterielPedagoAdapteAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.materielServ.getListMaterielPedagoAdapte(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
        this.materiels = res2;
      });
    });
  }

  addMaterielToEleve() {
    if (this.eleve.listMaterielsPedagoAdaptes === undefined) {
      this.eleve.listMaterielsPedagoAdaptes = [];
    }
    let present = false;
    for (const el of this.eleve.listMaterielsPedagoAdaptes) {
      if (el.materielPedagoAdapteId === this.materielAdd.materielPedagoAdapteId) {
        present = true;
      }
    }
    if (!present) {
      this.eleve.listMaterielsPedagoAdaptes.push(this.materielAdd);
    }
  }

  removeMaterielOfELeve(el: MaterielPedagoAdapte) {
    const index: number = this.eleve.listMaterielsPedagoAdaptes.indexOf(el);
    if (index !== -1) {
      this.eleve.listMaterielsPedagoAdaptes.splice(index, 1);
    }
  }

  addStructureToEleve() {
    if (this.eleve.listEleveStructurePros === undefined) {
      this.eleve.listEleveStructurePros = [];
    }
    let present = false;
    for (const el of this.eleve.listEleveStructurePros) {
      if (el.structurePro.structureProId === this.structureAdd.structureProId) {
        present = true;
        if (el.dateNotification !== this.dateStructureAdd) {
          el.dateNotification = this.dateStructureAdd;
        }
      }
    }
    if (!present) {
      const eleveStruc: EleveStructure = new EleveStructure();
      eleveStruc.structurePro = this.structureAdd;
      eleveStruc.dateNotification = this.dateStructureAdd;
      this.eleve.listEleveStructurePros.push(eleveStruc);
    }
  }

  openModalAddStructure() {
    this.modalRef = this.modalService.show(StructureAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.structureServ.getListStructure(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
        this.structures = res2;
      });
    });
  }

  removeStructureOfELeve(el: EleveStructure) {
    const index: number = this.eleve.listEleveStructurePros.indexOf(el);
    if (index !== -1) {
      this.eleve.listEleveStructurePros.splice(index, 1);
    }
  }
}

