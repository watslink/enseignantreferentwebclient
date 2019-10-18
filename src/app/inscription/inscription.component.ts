import { Component, OnInit } from '@angular/core';

import {AuthenticationService} from '../../service/authentication.service';
import {EnseignantReferentForm} from '../../model/EnseignantReferentForm.model';
import {EnseignantReferent} from '../../model/EnseignantReferent.model';

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

    this.ensRef = new EnseignantReferent();
    this.ensRef.enabled = true;
    this.ensRef.nom = ensRefForm.nom;
    this.ensRef.prenom = ensRefForm.prenom;
    this.ensRef.mail = ensRefForm.mail;
    this.ensRef.motDePasse = ensRefForm.motDePasse.mpd;
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
