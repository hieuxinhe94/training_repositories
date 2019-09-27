import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenicationService } from 'src/app/authenication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenicationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // Kiểm tra xem các thông tin đăng nhập người dùng (lần cuối đăng nhập, roles,...)
    if (this.authenticationService.hasLogined()) {

      debugger;
      return true;
    }

    debugger;
    // Có thể redirect về trang login
    return false;
  }


}
