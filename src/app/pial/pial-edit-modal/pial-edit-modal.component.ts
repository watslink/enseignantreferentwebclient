import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {PIAL} from '../../../model/PIAL.model';
import {PIALService} from '../../../service/PIAL.service';

@Component({
  selector: 'app-pial-edit-modal',
  templateUrl: './pial-edit-modal.component.html',
  styleUrls: ['./pial-edit-modal.component.css']
})
export class PialEditModalComponent implements OnInit {
  pial: PIAL;
  constructor(public modalRef: MDBModalRef, private pialServ: PIALService) { }

  ngOnInit() {
  }

  save() {
    this.pialServ.updatePIAL(this.pial).subscribe();
    this.modalRef.hide();
  }
}
