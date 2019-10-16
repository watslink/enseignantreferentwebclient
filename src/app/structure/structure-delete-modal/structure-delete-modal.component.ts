import { Component, OnInit } from '@angular/core';
import {Structure} from '../../../model/Structure.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {StructureService} from '../../../service/structure.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-structure-delete-modal',
  templateUrl: './structure-delete-modal.component.html',
  styleUrls: ['./structure-delete-modal.component.css']
})
export class StructureDeleteModalComponent implements OnInit {

  structure: Structure;
  constructor(public modalRef: MDBModalRef, private structServ: StructureService) { }
  ngOnInit() {
  }

  delete() {
    this.structServ.deleteStructure(this.structure.structureProId).subscribe();
    this.modalRef.hide();
  }
}
