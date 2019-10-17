import { Component, OnInit } from '@angular/core';
import {AESH} from '../../../model/AESH.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {faHome, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-aesh-details-modal',
  templateUrl: './aesh-details-modal.component.html',
  styleUrls: ['./aesh-details-modal.component.css']
})
export class AeshDetailsModalComponent implements OnInit {

  aesh: AESH;
  fatel = faPhone;
  famail = faEnvelope;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

}
