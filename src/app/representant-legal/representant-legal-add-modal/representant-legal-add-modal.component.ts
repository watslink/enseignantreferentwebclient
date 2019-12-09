import {Component, OnInit} from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Adresse} from '../../../model/Adresse.model';
import {AuthenticationService} from '../../../service/authentication.service';
import {Eleve} from '../../../model/Eleve.model';

@Component({
  selector: 'app-representant-legal-add-modal',
  templateUrl: './representant-legal-add-modal.component.html',
  styleUrls: ['./representant-legal-add-modal.component.css']
})
export class RepresentantLegalAddModalComponent implements OnInit {
  eleve: Eleve;
  representantLegal: RepresentantLegal;
  constructor(public modalRef: MDBModalRef,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.representantLegal = new RepresentantLegal();
    this.representantLegal.adresse = new Adresse();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.representantLegal.enseignantReferent = res;
      this.eleve.listRepresentantsLegaux.push(this.representantLegal);
    });
    this.modalRef.hide();
  }
}


