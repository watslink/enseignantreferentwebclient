import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {Observable} from 'rxjs';


@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8080';
  private jwtToken = null;

    constructor(private http: HttpClient, private router: Router) {

    }

    login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
    }

    logout() {
      localStorage.removeItem('token');
      this.redirectLoginPage();
    }
    inscrire(ensRef) {
      return this.http.post(this.host + '/inscription', ensRef, {observe: 'response'});
    }

    redirectLoginPage() {
      this.router.navigate(['/login']);
    }

    saveToken(jwt: string) {
      localStorage.setItem('token', jwt);
    }

  loadToken() {
    if (this.jwtToken == null) {
      this.jwtToken = localStorage.getItem('token');
    }
  }
}
