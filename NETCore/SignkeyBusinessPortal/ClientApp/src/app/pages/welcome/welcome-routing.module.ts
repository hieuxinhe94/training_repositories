import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { Configuration } from 'src/app/helper/configuration';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {

  constructor(private authService: AppAuthService, private router: Router) {
    if (this.authService.isValidToken) {
      this.router.navigate([`${Configuration.DASHBOARD_URL}`]);
    }
  }

}
