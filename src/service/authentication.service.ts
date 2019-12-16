import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {BehaviorSubject, Observable} from 'rxjs';
import {EnseignantReferent} from '../model/EnseignantReferent.model';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8080';
  private jwtToken = null;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private ensRefLogged: EnseignantReferent;

  constructor(private http: HttpClient, private router: Router) {
  }

  get isLoggedIn() {
    if (localStorage.getItem('token') != null) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  logout() {
    localStorage.clear();
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

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.loadToken();
    }
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  getEnsRefByMail(ensRef): Observable<EnseignantReferent> {
    return this.http.get<EnseignantReferent>(this.host + '/enseignantReferentByMail/' + ensRef.mail);
  }

  getEnsRefById(ensRefId): Observable<EnseignantReferent> {
    return this.http.get<EnseignantReferent>(this.host + '/enseignantReferent/' + ensRefId);
  }

  updateEnsRefMail(ensRefId, newMail) {
    const formdata: FormData = new FormData();

    formdata.append('id', ensRefId);
    formdata.append('newMail', newMail);
    return this.http.put(this.host + '/enseignantReferentMail', formdata, {observe: 'response'});
  }

  updateEnsRefPassword(ensRefId, oldPass, mpd) {
    const formdata: FormData = new FormData();

    formdata.append('id', ensRefId);
    formdata.append('oldPass', oldPass);
    formdata.append('newPass', mpd);
    return this.http.put(this.host + '/enseignantReferentPassword', formdata, {observe: 'response'});
  }

  reinitRDV(ensRefId) {
    return this.http.get(this.host + '/enseignantReferentReinitRDV/' + ensRefId);
  }
}
