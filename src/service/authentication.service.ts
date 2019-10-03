import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  private host = 'http://localhost:8080';
    constructor(private http: HttpClient) {

    }

    login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
    }

    logout() {
      localStorage.removeItem('token');
    }

    saveToken(jwt: string) {
      localStorage.setItem('token', jwt);
    }
}
