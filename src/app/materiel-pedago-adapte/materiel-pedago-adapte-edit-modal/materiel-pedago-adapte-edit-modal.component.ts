import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {MaterielPedagoAdapte} from '../../../model/MaterielPedagoAdapte.model';
import {MaterielPedagoAdapteService} from '../../../service/materielPedagoAdapte.service';

@Component({
  selector: 'app-materiel-pedago-adapte-edit-modal',
  templateUrl: './materiel-pedago-adapte-edit-modal.component.html',
  styleUrls: ['./materiel-pedago-adapte-edit-modal.component.css']
})
export class MaterielPedagoAdapteEditModalComponent implements OnInit {
  materielPedagoAdapte: MaterielPedagoAdapte;
  constructor(public modalRef: MDBModalRef, private materielPedagoAdapteServ: MaterielPedagoAdapteService) { }

  ngOnInit() {
  }

  save() {
    this.materielPedagoAdapteServ.updateMaterielPedagoAdapte(this.materielPedagoAdapte).subscribe();
    this.modalRef.hide();
  }
}
