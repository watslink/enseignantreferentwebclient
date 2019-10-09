import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {EnseignantReferent} from '../../model/EnseignantReferent.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur = 0;

  private ensRef: EnseignantReferent;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.login(user).subscribe(
      resp => {
        const jwt = resp.headers.get('Authorization');
        this.authService.saveToken( jwt );
        this.authService.loadToken();
        this.authService.getEnsRef(user).subscribe( resp2 => {
          this.ensRef = resp2;
          localStorage.setItem('idEnsRef', this.ensRef.enseignantReferentId.toString());
        });
        this.router.navigateByUrl('/accueil');
      }, err => {
        this.erreur = 1;
      }
    );
  }
}
