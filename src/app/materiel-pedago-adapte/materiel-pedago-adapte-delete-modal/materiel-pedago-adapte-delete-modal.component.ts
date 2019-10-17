import { Component, OnInit } from '@angular/core';
import {MaterielPedagoAdapte} from '../../../model/MaterielPedagoAdapte.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {MaterielPedagoAdapteService} from '../../../service/materielPedagoAdapte.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-materiel-pedago-adapte-delete-modal',
  templateUrl: './materiel-pedago-adapte-delete-modal.component.html',
  styleUrls: ['./materiel-pedago-adapte-delete-modal.component.css']
})
export class MaterielPedagoAdapteDeleteModalComponent implements OnInit {

  materielPedagoAdapte: MaterielPedagoAdapte;
  constructor(public modalRef: MDBModalRef, private materielPedagoAdapteServ: MaterielPedagoAdapteService) { }
  ngOnInit() {
  }

  delete() {
    this.materielPedagoAdapteServ.deleteMaterielPedagoAdapte(this.materielPedagoAdapte.materielPedagoAdapteId).subscribe();
    this.modalRef.hide();
  }
}
