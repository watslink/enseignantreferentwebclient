import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';
import {AuthInterceptor} from '../interceptor/AuthInterceptor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'enseignantreferentwebclient';
  isLoggedIn$: Observable<boolean> ;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
