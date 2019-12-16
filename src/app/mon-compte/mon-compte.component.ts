import { Component, OnInit } from '@angular/core';
import {EnseignantReferent} from '../../model/EnseignantReferent.model';
import {AuthenticationService} from '../../service/authentication.service';
import {NewMailModalComponent} from './new-mail-modal/new-mail-modal.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {NewPasswordModalComponent} from './new-password-modal/new-password-modal.component';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  ensRef: EnseignantReferent;
  modalRef: MDBModalRef;
  constructor(private authServ: AuthenticationService,
              private modalService: MDBModalService) { }

  ngOnInit() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.ensRef = res;
    });
  }

  changeMail() {
    this.modalRef = this.modalService.show(NewMailModalComponent, {data: {ensRef: this.ensRef}});
    this.modalService.close.subscribe(res => {
      this.ngOnInit();
    });
  }

  changePassword() {
    this.modalRef = this.modalService.show(NewPasswordModalComponent, {data: {ensRef: this.ensRef}});
    this.modalService.close.subscribe(res => {
      this.ngOnInit();
    });
  }

  reinitRDV() {
  }
}
