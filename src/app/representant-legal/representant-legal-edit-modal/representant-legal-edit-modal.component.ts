import { Component, OnInit } from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Eleve} from '../../../model/Eleve.model';
import {EleveService} from '../../../service/eleve.service';


@Component({
  selector: 'app-representant-legal-edit-modal',
  templateUrl: './representant-legal-edit-modal.component.html',
  styleUrls: ['./representant-legal-edit-modal.component.css']
})
export class RepresentantLegalEditModalComponent implements OnInit {
  eleve: Eleve;
  index: number;
  representantLegal: RepresentantLegal;
  constructor(public modalRef: MDBModalRef, private eleveServ: EleveService) { }

  ngOnInit() {
   this.index = this.eleve.listRepresentantsLegaux.indexOf(this.representantLegal);
  }

  save() {
    this.eleve.listRepresentantsLegaux[this.index] = this.representantLegal;
    this.eleveServ.updateEleve(this.eleve).subscribe();
    this.modalRef.hide();
  }
}
