import { Component, OnInit } from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Eleve} from '../../../model/Eleve.model';


@Component({
  selector: 'app-representant-legal-delete-modal',
  templateUrl: './representant-legal-delete-modal.component.html',
  styleUrls: ['./representant-legal-delete-modal.component.css']
})
export class RepresentantLegalDeleteModalComponent implements OnInit {
  eleve: Eleve;
  index: number;
  representantLegal: RepresentantLegal;
  constructor(public modalRef: MDBModalRef) { }
  ngOnInit() {
    this.index = this.eleve.listRepresentantsLegaux.indexOf(this.representantLegal);
  }

  delete() {
    this.eleve.listRepresentantsLegaux.splice(this.index);
    this.modalRef.hide();
  }
}
