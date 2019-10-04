import { Component, OnInit } from '@angular/core';
import {EnseignantReferentForm} from '../../model/EnseignantReferentForm';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  private ensRefForm: EnseignantReferentForm = new EnseignantReferentForm('', '', '',  { mpd: '' , rempd: ''});

  constructor() { }

  ngOnInit() {
  }

}
