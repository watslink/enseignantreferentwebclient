import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8080';
  private jwtToken = null;
  private loggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) {
  }

    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }

    login(user) {
      return this.http.post(this.host + '/login', user, {observe: 'response'});
    }

    logout() {
      localStorage.removeItem('token');
      this.loggedIn.next(false);
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
      this.loggedIn.next(true);
    }

    loadToken() {
      if (this.jwtToken == null) {
        this.jwtToken = localStorage.getItem('token');
      }
      return this.jwtToken;
  }
}
