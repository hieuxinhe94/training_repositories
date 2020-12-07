import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AppAuthService } from '../services/app-auth.service';

@Injectable()
export class SignedInGuard implements CanActivate {

  constructor(private authService: AppAuthService, private router: Router) {
  }

  canActivate() {
    if (!this.authService.isValidToken) {

      // redirect to some view explaining what happened
      this.router.navigate(['/index']);
      return false;
    }

    return true;
  }

}
