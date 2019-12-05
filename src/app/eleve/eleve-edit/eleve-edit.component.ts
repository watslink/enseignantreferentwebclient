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
              private modalService: MDBModalService) { }

  ngOnInit() {
    this.eleve = history.state;
    this.materielAdd = null;
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

  openModalRLDetails(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalDetailsModalComponent, {data: {representantLegal: element}});
  }
  openModalRLEdit(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalEditModalComponent, {data: {representantLegal: element, eleve: this.eleve}});
    this.modalService.close.subscribe(res => {
      this.eleveServ.getEleve(this.eleve.eleveId).subscribe( res2 => {
        this.eleve = res2;
      });
    });
  }
  openModalRLDelete(element: RepresentantLegal) {
    this.modalRef = this.modalService.show(RepresentantLegalDeleteModalComponent, {data: {representantLegal: element}});
    this.modalService.close.subscribe(res => {
      this.eleveServ.getEleve(this.eleve.eleveId).subscribe( res2 => {
        this.eleve = res2;
      });
    });
  }
  openModalRLAdd() {
    this.modalRef = this.modalService.show(RepresentantLegalAddModalComponent, {data: {eleve: this.eleve}});
    this.modalService.close.subscribe(res => {
      this.eleveServ.getEleve(this.eleve.eleveId).subscribe( res2 => {
        this.eleve = res2;
      });
    });
  }

  openModalAddMateriel() {
    this.modalRef = this.modalService.show(MaterielPedagoAdapteAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.materielServ.getListMaterielPedagoAdapte(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res2 => {
        this.materiels = res2;
      });
    });
  }

  addMaterielToEleve(materielAdapte) {
    this.eleve.listMaterielsPedagoAdaptes.push(materielAdapte);
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }

  removeMaterielOfELeve(el: MaterielPedagoAdapte) {
    const index: number = this.eleve.listMaterielsPedagoAdaptes.indexOf(el);
    if (index !== -1) {
      this.eleve.listMaterielsPedagoAdaptes.splice(index, 1);
      this.eleveServ.updateEleve(this.eleve).subscribe();
    }
  }
}

