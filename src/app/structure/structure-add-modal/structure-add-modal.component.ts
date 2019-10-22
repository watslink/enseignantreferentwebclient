import {Component, OnInit} from '@angular/core';
import {Structure} from '../../../model/Structure.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {StructureService} from '../../../service/structure.service';
import {Adresse} from '../../../model/Adresse.model';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-structure-add-modal',
  templateUrl: './structure-add-modal.component.html',
  styleUrls: ['./structure-add-modal.component.css']
})
export class StructureAddModalComponent implements OnInit {
  structure: Structure;
  constructor(public modalRef: MDBModalRef,
              private structureServ: StructureService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.structure = new Structure();
    this.structure.adresse = new Adresse();
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.structure.enseignantReferent = res;
      this.structureServ.addStructure(this.structure).subscribe();
    });
    this.modalRef.hide();
  }
}

