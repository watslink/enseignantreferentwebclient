import { Component, OnInit } from '@angular/core';
import {Niveau} from '../../../model/Niveau.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {NiveauService} from '../../../service/niveau.service';

@Component({
  selector: 'app-niveau-delete-modal',
  templateUrl: './niveau-delete-modal.component.html',
  styleUrls: ['./niveau-delete-modal.component.css']
})
export class NiveauDeleteModalComponent implements OnInit {

  niveau: Niveau;
  constructor(public modalRef: MDBModalRef, private niveauServ: NiveauService) { }
  ngOnInit() {
  }

  delete() {
    this.niveauServ.deleteNiveau(this.niveau.niveauId).subscribe();
    this.modalRef.hide();
  }
}
