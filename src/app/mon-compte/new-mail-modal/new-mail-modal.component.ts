import { Component, OnInit } from '@angular/core';
import {DocumentInscriptionRequis} from '../../../model/DocumentInscriptionRequis.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {DocumentInscriptionRequisService} from '../../../service/documentinscriptionrequis.service';
import {EnseignantReferent} from '../../../model/EnseignantReferent.model';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-new-mail-modal',
  templateUrl: './new-mail-modal.component.html',
  styleUrls: ['./new-mail-modal.component.css']
})
export class NewMailModalComponent implements OnInit {
  ensRef: EnseignantReferent;
  constructor(public modalRef: MDBModalRef, private authServ: AuthenticationService) { }

  ngOnInit() {
  }

  save() {
    console.log();
    this.authServ.updateEnsRefMail(this.ensRef.enseignantReferentId, this.ensRef.mail).subscribe();
    this.modalRef.hide();
  }
}
