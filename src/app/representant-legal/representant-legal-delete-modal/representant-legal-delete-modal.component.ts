import { Component, OnInit } from '@angular/core';
import {RepresentantLegal} from '../../../model/RepresentantLegal.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {RepresentantLegalService} from '../../../service/representantlegal.service';


@Component({
  selector: 'app-representant-legal-delete-modal',
  templateUrl: './representant-legal-delete-modal.component.html',
  styleUrls: ['./representant-legal-delete-modal.component.css']
})
export class RepresentantLegalDeleteModalComponent implements OnInit {

  representantLegal: RepresentantLegal;
  constructor(public modalRef: MDBModalRef, private representantLegalServ: RepresentantLegalService) { }
  ngOnInit() {
  }

  delete() {
    this.representantLegalServ.deleteRepresentantLegal(this.representantLegal.representantLegalId).subscribe();
    this.modalRef.hide();
  }
}
