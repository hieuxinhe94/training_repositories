import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { MenuConfig } from 'src/app/helper/menu-config';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ReferalCodeComponent } from '../referal-code/referal-code.component';

@Component({
  selector: 'sk-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isCollapsed = false;
  color = 'light';
  theme = true;

  isVisible = false;
  isConfirmLoading = false;
  showProfileCompleteNotice = true;
  closeIntroduceNotice = false;

  seletedMenuItem = MenuConfig.Dashboard;
  MenuConfig = MenuConfig;
  GreetingText = '';

  constructor(
    private router: Router,
    private modalService: NzModalService,
    private authService: AppAuthService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getCurrentUserInfo().subscribe();
    this.profileService.getCurrentUser.subscribe((val) => {
      if (val) { this.GreetingText = `Welcome, ${val.FullName}`; }
    });
  }

  showModal(): void {
    this.modalService.create({
      nzTitle: '',
      nzContent: ReferalCodeComponent,
      nzWidth: 900
    });
  }

  setMenuItem(item: MenuConfig) {
    this.seletedMenuItem = item;
  }

  logOut() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/']);
      });
  }
}
