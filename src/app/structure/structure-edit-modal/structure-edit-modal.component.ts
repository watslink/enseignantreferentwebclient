import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Structure} from '../../../model/Structure.model';
import {StructureService} from '../../../service/structure.service';

@Component({
  selector: 'app-structure-edit-modal',
  templateUrl: './structure-edit-modal.component.html',
  styleUrls: ['./structure-edit-modal.component.css']
})
export class StructureEditModalComponent implements OnInit {
  structure: Structure;
  constructor(public modalRef: MDBModalRef, private structServ: StructureService) { }

  ngOnInit() {
  }

  save() {
    this.structServ.updateStructure(this.structure).subscribe();
    this.modalRef.hide();
  }
}
