import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private jwtToken = null;
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadToken();
    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('Authorization', this.jwtToken)});
    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }

  loadToken() {
    if (this.jwtToken == null) {
      this.jwtToken = localStorage.getItem('token');
    }
  }
}
