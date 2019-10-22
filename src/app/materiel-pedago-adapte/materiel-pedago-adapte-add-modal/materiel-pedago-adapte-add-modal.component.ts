import {Component, OnInit} from '@angular/core';
import {MaterielPedagoAdapte} from '../../../model/MaterielPedagoAdapte.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {MaterielPedagoAdapteService} from '../../../service/materielPedagoAdapte.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-materiel-pedago-adapte-add-modal',
  templateUrl: './materiel-pedago-adapte-add-modal.component.html',
  styleUrls: ['./materiel-pedago-adapte-add-modal.component.css']
})
export class MaterielPedagoAdapteAddModalComponent implements OnInit {
  materielPedagoAdapte: MaterielPedagoAdapte;
  constructor(public modalRef: MDBModalRef,
              private materielPedagoAdapteServ: MaterielPedagoAdapteService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.materielPedagoAdapte = new MaterielPedagoAdapte();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.materielPedagoAdapte.enseignantReferent = res;
      this.materielPedagoAdapteServ.addMaterielPedagoAdapte(this.materielPedagoAdapte).subscribe();
    });
    this.modalRef.hide();
  }
}

