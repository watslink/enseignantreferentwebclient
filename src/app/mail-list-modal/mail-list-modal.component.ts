import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../model/Eleve.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EleveService} from '../../service/eleve.service';

@Component({
  selector: 'app-mail-list-modal',
  templateUrl: './mail-list-modal.component.html',
  styleUrls: ['./mail-list-modal.component.css']
})
export class MailListModalComponent implements OnInit {

  eleve: Eleve;

  constructor(public modalRef: MDBModalRef,
              private eleveService: EleveService) { }

  ngOnInit() {}
}
