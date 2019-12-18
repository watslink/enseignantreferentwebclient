import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../model/Eleve.model';

import {MDBModalRef} from 'angular-bootstrap-md';

import {EleveService} from '../../service/eleve.service';


@Component({
  selector: 'app-reunion-modal',
  templateUrl: './reunion-modal.component.html',
  styleUrls: ['./reunion-modal.component.css']
})
export class ReunionModalComponent implements OnInit {

  eleve: Eleve;
  newDate;

  constructor(public modalRef: MDBModalRef,
              private eleveService: EleveService) { }

  ngOnInit() {
    this.newDate = this.eleve.dateReunion;
  }
  save() {
    this.eleve.dateReunion = this.newDate;
    this.eleveService.updateEleve(this.eleve).subscribe();
    this.modalRef.hide();
  }
}
