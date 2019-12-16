import { Component, OnInit } from '@angular/core';
import {EnseignantReferent} from '../../../model/EnseignantReferent.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-reinitialize-rdv-modal',
  templateUrl: './reinitialize-rdv-modal.component.html',
  styleUrls: ['./reinitialize-rdv-modal.component.css']
})
export class ReinitializeRdvModalComponent implements OnInit {
  ensRef: EnseignantReferent;

  constructor(public modalRef: MDBModalRef, private authServ: AuthenticationService) {
  }

  ngOnInit() {
  }

  reinit() {
    this.authServ.reinitRDV(this.ensRef.enseignantReferentId).subscribe();
    this.modalRef.hide();
  }
}
