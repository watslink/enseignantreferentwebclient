import {Component, OnInit} from '@angular/core';
import {Niveau} from '../../../model/Niveau.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {NiveauService} from '../../../service/niveau.service';
import {AuthenticationService} from '../../../service/authentication.service';

@Component({
  selector: 'app-niveau-add-modal',
  templateUrl: './niveau-add-modal.component.html',
  styleUrls: ['./niveau-add-modal.component.css']
})
export class NiveauAddModalComponent implements OnInit {
  niveau: Niveau;
  constructor(public modalRef: MDBModalRef,
              private niveauServ: NiveauService,
              private authServ: AuthenticationService) { }

  ngOnInit() {
    this.niveau = new Niveau();
    this.niveau.degre = null;
    this.niveau.specialise = false;
  }

  save() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.niveau.enseignantReferent = res;
      this.niveauServ.addNiveau(this.niveau).subscribe();
    });
    this.modalRef.hide();
  }
}

