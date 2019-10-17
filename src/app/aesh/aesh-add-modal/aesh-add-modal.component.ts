import {Component, OnInit} from '@angular/core';
import {AESH} from '../../../model/AESH.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AESHService} from '../../../service/AESH.service';
import {Adresse} from '../../../model/Adresse.model';
import {PIAL} from '../../../model/PIAL.model';
import {PIALService} from '../../../service/PIAL.service';

@Component({
  selector: 'app-aesh-add-modal',
  templateUrl: './aesh-add-modal.component.html',
  styleUrls: ['./aesh-add-modal.component.css']
})
export class AeshAddModalComponent implements OnInit {
  aesh: AESH;
  pials: PIAL[];
  constructor(public modalRef: MDBModalRef, private aeshServ: AESHService,
              private pialServ: PIALService) { }

  ngOnInit() {
    this.aesh = new AESH();
    this.aesh.pial = new PIAL();
    this.pialServ.getListPIAL().subscribe( res => {
      this.pials = res;
    });
  }

  save() {
    this.aeshServ.addAESH(this.aesh).subscribe();
    this.modalRef.hide();
  }
}

