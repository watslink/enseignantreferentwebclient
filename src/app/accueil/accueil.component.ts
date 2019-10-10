import { Component, OnInit } from '@angular/core';
import {Structure} from '../../model/Structure.model';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  public structures: Structure[] ;
  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
}
