import { Component, OnInit } from '@angular/core';
import {EnseignantReferentForm} from '../../model/EnseignantReferentForm';
import {EnseignantReferent} from '../../model/EnseignantReferent';
import {AuthenticationService} from '../../service/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ModalComponent} from 'ngb-modal';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private ensRefForm: EnseignantReferentForm = new EnseignantReferentForm('', '', '',  { mpd: '' , rempd: ''});

  private ensRef: EnseignantReferent;
  private erreur = 0;
  private inscrit = false;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  onInscription(ensRefForm) {

    this.ensRef = new EnseignantReferent(ensRefForm.nom,
      ensRefForm.prenom, ensRefForm.mail, ensRefForm.motDePasse.mpd, true);

    this.authService.inscrire(this.ensRef).subscribe(
      resp => { if (resp.status === 201) {
        this.inscrit = true;
        setTimeout(() => {
          this.authService.redirectLoginPage();
        }, 2000);
      }
        },
      (err: Response) => {
        if (err.status === 409) {
          this.erreur = 1;
        } else {
          this.erreur = 2;
        }
      });
  }
}
