import { Component, OnInit } from '@angular/core';
import {EnseignantReferent} from '../../../model/EnseignantReferent.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-new-password-modal',
  templateUrl: './new-password-modal.component.html',
  styleUrls: ['./new-password-modal.component.css']
})
export class NewPasswordModalComponent implements OnInit {
  ensRef: EnseignantReferent;
  oldPass: string;
  motDePasse = { mpd: '' , rempd: ''};
  error = false;
  constructor(public modalRef: MDBModalRef, private authServ: AuthenticationService) { }

  ngOnInit() {
  }

  save() {
    console.log();
    this.authServ.updateEnsRefPassword(this.ensRef.enseignantReferentId, this.oldPass, this.motDePasse.mpd).subscribe( res => {
      if (res.body) {
        this.error = false;
        this.modalRef.hide();
      } else {
        this.error = true;
      }
      }
    );
  }
}

