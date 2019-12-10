import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EleveService} from '../../../service/eleve.service';

@Component({
  selector: 'app-eleve-delete-modal',
  templateUrl: './eleve-delete-modal.component.html',
  styleUrls: ['./eleve-delete-modal.component.css']
})
export class EleveDeleteModalComponent implements OnInit {

  eleve: Eleve;

  constructor(public modalRef: MDBModalRef, private eleveServ: EleveService) {
  }

  ngOnInit() {
  }

  delete() {
    this.eleveServ.deleteEleve(this.eleve.eleveId).subscribe();
    this.modalRef.hide();
  }

}
