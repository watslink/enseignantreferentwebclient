import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AESH} from '../../../model/AESH.model';
import {AESHService} from '../../../service/AESH.service';
import {PIALService} from '../../../service/PIAL.service';
import {PIAL} from '../../../model/PIAL.model';

@Component({
  selector: 'app-aesh-edit-modal',
  templateUrl: './aesh-edit-modal.component.html',
  styleUrls: ['./aesh-edit-modal.component.css']
})
export class AeshEditModalComponent implements OnInit {
  aesh: AESH;
  pials: PIAL[];
  constructor(public modalRef: MDBModalRef, private aeshServ: AESHService, private pialServ: PIALService) { }

  ngOnInit() {
    this.pialServ.getListPIAL(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.pials = res;
    });
  }

  save() {
    this.aeshServ.updateAESH(this.aesh).subscribe();
    this.modalRef.hide();
  }
}
