import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {faHome, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-etablissement-details-modal',
  templateUrl: './etablissement-details-modal.component.html',
  styleUrls: ['./etablissement-details-modal.component.css']
})
export class EtablissementDetailsModalComponent implements OnInit {

  etablissement: Etablissement;
  fatel = faPhone;
  famail = faEnvelope;
  faAdres = faHome;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
