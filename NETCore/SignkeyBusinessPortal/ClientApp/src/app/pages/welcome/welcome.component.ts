import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/helper/configuration';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { ScriptService } from 'src/app/services/resource.service';

@Component({
  selector: 'sk-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  showAuthenModal = false;
  showEstimateTool = false;

  constructor(
    private scriptService: ScriptService,
    private authService: AppAuthService,
    private router: Router) {

    if (this.authService.isValidToken) {
      this.router.navigate([`${Configuration.DASHBOARD_URL}`]);
    }
  }

  ngOnInit() {
    // this.scriptService.load('welcompage').then(data => {
    //   console.log('script loaded ', data);
    // })
    //   .catch(error => console.log(error));
  }

  showLoginModal(): void {
    this.showAuthenModal = true;
  }

  showEstimateModal(): void {
    this.showEstimateTool = true;
  }

  handleCancel(): void {
    this.showAuthenModal = false;
  }

}
