import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServ: AuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authServ.loadToken() != null) {
      // Clone the request to add the new header.
      const authReq = req.clone({headers: req.headers.set('Authorization', this.authServ.loadToken())});
      // Pass on the cloned request instead of the original request.
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
