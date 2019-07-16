import { AuthenticateService } from '../Services/authenticate.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { User } from '../Models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor(private authenticateService: AuthenticateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler)
    : Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
      this.authenticateService.getCurrentUser.subscribe((value) => {
      if (value && value.token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${value.token}`
          }
        });
      }
    });
      return next.handle(req);
  }
}
