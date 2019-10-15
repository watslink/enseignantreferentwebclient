import {Component, OnInit} from '@angular/core';
import {PIAL} from '../../../model/PIAL.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {PIALService} from '../../../service/PIAL.service';
import {Adresse} from '../../../model/Adresse.model';

@Component({
  selector: 'app-pial-add-modal',
  templateUrl: './pial-add-modal.component.html',
  styleUrls: ['./pial-add-modal.component.css']
})
export class PialAddModalComponent implements OnInit {
  pial: PIAL;
  constructor(public modalRef: MDBModalRef, private pialServ: PIALService) { }

  ngOnInit() {
    this.pial = new PIAL();
  }

  save() {
    this.pialServ.addPIAL(this.pial).subscribe();
    this.modalRef.hide();
  }
}
