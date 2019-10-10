import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Observable} from 'rxjs';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons/faPowerOff';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'enseignantreferentwebclient';
  isLoggedIn$: Observable<boolean> ;
  isNavbarCollapsed = true;
  faoff = faPowerOff;
  fapencil = faPencilAlt;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
  onLogout() {
    this.authService.logout();
  }
}
