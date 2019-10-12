import { Component, OnInit } from '@angular/core';
import {Structure} from '../../model/Structure.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {faHome, faMailBulk, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';

@Component({
  selector: 'app-structure-details-modal',
  templateUrl: './structure-details-modal.component.html',
  styleUrls: ['./structure-details-modal.component.css']
})
export class StructureDetailsModalComponent implements OnInit {

  structure: Structure;
  fatel = faPhone;
  famail = faEnvelope;
  faAdres = faHome;
  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
    console.log(this.structure.nom);
  }

}
