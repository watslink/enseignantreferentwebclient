import { Component, OnInit } from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {faHome, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-representant-legal-details-modal',
  templateUrl: './representant-legal-details-modal.component.html',
  styleUrls: ['./representant-legal-details-modal.component.css']
})
export class RepresentantLegalDetailsModalComponent implements OnInit {

  representantLegal: RepresentantLegal;
  fatel = faPhone;
  famail = faEnvelope;
  faAdres = faHome;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
