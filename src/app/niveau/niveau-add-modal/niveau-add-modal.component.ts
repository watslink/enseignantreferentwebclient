import {Component, OnInit} from '@angular/core';
import {Niveau} from '../../../model/Niveau.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {NiveauService} from '../../../service/niveau.service';

@Component({
  selector: 'app-niveau-add-modal',
  templateUrl: './niveau-add-modal.component.html',
  styleUrls: ['./niveau-add-modal.component.css']
})
export class NiveauAddModalComponent implements OnInit {
  niveau: Niveau;
  constructor(public modalRef: MDBModalRef, private niveauServ: NiveauService) { }

  ngOnInit() {
    this.niveau = new Niveau();
  }

  save() {
    this.niveauServ.addNiveau(this.niveau).subscribe();
    this.modalRef.hide();
  }
}

