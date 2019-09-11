import { AuthenticateService } from '../Services/authenticate.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { User } from '../Models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private authenticateService: AuthenticateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    debugger;
    // Get token key from local storage
    const lastUser: User = JSON.parse(localStorage.getItem(Config.LOGINED_USER_KEY));

    if (lastUser && lastUser.token) {
      // add jwt to authorization header
      req = req.clone({
        setHeaders: { Authorization: 'Bearer ' + lastUser.token }
      });
    }

    return next.handle(req);
  }
}
