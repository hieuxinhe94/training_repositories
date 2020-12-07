import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Configuration } from 'src/app/helper/configuration';
import { Helper } from 'src/app/helper/help';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'sk-referal-code',
  templateUrl: './referal-code.component.html',
  styleUrls: ['./referal-code.component.scss']
})
export class ReferalCodeComponent implements OnInit {

  link = ``;
  code = '';

  constructor(
    private notification: NzNotificationService,
    private authService: AppAuthService,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getCurrentUser.subscribe((val) => {
      if (val != null) {
        debugger
        this.code = val.ReferralCode;
        this.link = val.ReferralLink || `${Configuration.PREFIX_API_REFERAL_URL}=${val.ReferralCode}`;
      }
    });
  }

  // copyLinkToClipboard() {
  //   Helper.saveStringToClipboard(this.link);
  //   this.notification.info('Clipboard', 'Copied link!');
  // }

  // copyCodeToClipboard() {
  //   Helper.saveStringToClipboard(this.code);
  //   this.notification.info('Clipboard', 'Copied code!');
  // }

}
