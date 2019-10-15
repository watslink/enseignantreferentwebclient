import { Component, OnInit } from '@angular/core';
import {PIAL} from '../../../model/PIAL.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {PIALService} from '../../../service/PIAL.service';

@Component({
  selector: 'app-pial-delete-modal',
  templateUrl: './pial-delete-modal.component.html',
  styleUrls: ['./pial-delete-modal.component.css']
})
export class PialDeleteModalComponent implements OnInit {

  pial: PIAL;
  constructor(public modalRef: MDBModalRef, private pialServ: PIALService) { }

  ngOnInit() {
  }

  delete() {
    this.pialServ.deletePIAL(this.pial.pialId).subscribe();
    this.modalRef.hide();
  }
}
