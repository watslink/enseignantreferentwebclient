import { Component, OnInit } from '@angular/core';
import {EnseignantReferent} from '../../model/EnseignantReferent.model';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  ensRef: EnseignantReferent;
  constructor(private authServ: AuthenticationService) { }

  ngOnInit() {
    this.authServ.getEnsRefById(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.ensRef = res;
    });
  }

  changeMail() {

  }

  changePassword() {

  }

  reinitRDV() {

  }
}
