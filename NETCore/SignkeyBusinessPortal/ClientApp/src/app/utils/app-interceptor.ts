import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppAuthService } from '../services/app-auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    private authService: AppAuthService,
    private notification: NzNotificationService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.getAccessToken
      }
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !request.url.indexOf('token')) {
          this.router.navigate(['/auth']);
        } else if (error.status !== 200) {
          this.notification
            .error('Error', error.status + ': ' + error.message);
        }
        return throwError(error);
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 401) {
            this.router.navigate(['/auth']);
          }
        }
        return event;
      }));
  }
}
