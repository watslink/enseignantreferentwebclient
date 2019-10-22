import {Component, OnInit} from '@angular/core';
import {PIAL} from '../../../model/PIAL.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {PIALService} from '../../../service/PIAL.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-pial-add-modal',
  templateUrl: './pial-add-modal.component.html',
  styleUrls: ['./pial-add-modal.component.css']
})
export class PialAddModalComponent implements OnInit {
  pial: PIAL;
  constructor(public modalRef: MDBModalRef,
              private pialServ: PIALService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.pial = new PIAL();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.pial.enseignantReferent = res;
      this.pialServ.addPIAL(this.pial).subscribe();
    });
    this.modalRef.hide();
  }
}
