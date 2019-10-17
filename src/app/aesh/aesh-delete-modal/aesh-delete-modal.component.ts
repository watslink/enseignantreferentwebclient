import { Component, OnInit } from '@angular/core';
import {AESH} from '../../../model/AESH.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AESHService} from '../../../service/AESH.service';

@Component({
  selector: 'app-aesh-delete-modal',
  templateUrl: './aesh-delete-modal.component.html',
  styleUrls: ['./aesh-delete-modal.component.css']
})
export class AeshDeleteModalComponent implements OnInit {

  aesh: AESH;
  constructor(public modalRef: MDBModalRef, private aeshServ: AESHService) { }

  ngOnInit() {
  }

  delete() {
    this.aeshServ.deleteAESH(this.aesh.aeshId).subscribe();
    this.modalRef.hide();
  }
}
