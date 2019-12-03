import {Component, OnInit} from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {RepresentantLegalService} from '../../../service/representantlegal.service';
import {Adresse} from '../../../model/Adresse.model';
import {AuthenticationService} from '../../../service/authentication.service';
import {Eleve} from '../../../model/Eleve.model';
import {EleveService} from '../../../service/eleve.service';

@Component({
  selector: 'app-representant-legal-add-modal',
  templateUrl: './representant-legal-add-modal.component.html',
  styleUrls: ['./representant-legal-add-modal.component.css']
})
export class RepresentantLegalAddModalComponent implements OnInit {
  eleve: Eleve;
  representantLegal: RepresentantLegal;
  constructor(public modalRef: MDBModalRef,
              private eleveServ: EleveService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.representantLegal = new RepresentantLegal();
    this.representantLegal.adresse = new Adresse();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.representantLegal.enseignantReferent = res;
      this.eleve.listRepresentantsLegaux.push(this.representantLegal);
      this.eleveServ.updateEleve(this.eleve).subscribe();
    });
    this.modalRef.hide();
  }
}

