import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  constructor(private authServ: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authServ.isLoggedIn.subscribe(res => {
      if (!res) {
        this.router.navigateByUrl('/login');
      }
    });
  }
}
