import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Niveau} from '../../../model/Niveau.model';
import {NiveauService} from '../../../service/niveau.service';

@Component({
  selector: 'app-niveau-edit-modal',
  templateUrl: './niveau-edit-modal.component.html',
  styleUrls: ['./niveau-edit-modal.component.css']
})
export class NiveauEditModalComponent implements OnInit {
  niveau: Niveau;
  constructor(public modalRef: MDBModalRef, private niveauServ: NiveauService) { }

  ngOnInit() {
  }

  save() {
    this.niveauServ.updateNiveau(this.niveau).subscribe();
    this.modalRef.hide();
  }
}
