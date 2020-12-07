import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SaleAgentInfoModel } from 'src/app/models/register-result-model';
import { UserProfile } from 'src/app/models/user-profile';
import { AppAuthService } from 'src/app/services/app-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'sk-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() MissingField: string;
  @Output() OnClose = new EventEmitter();

  tempUserprofile = new UserProfile();
  formErrors: any;
  emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
  paypalRegex = new RegExp('^[a-z0-9._%+-]+@paypal\\.[a-z]{2,4}$');
  isSubmiting = false;
  profileForm = new FormGroup({});

  constructor(
    private authService: AppAuthService,
    private profileService: ProfileService,
    private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.profileService.getCurrentUser.subscribe((val) => {
      if (val) {

        this.tempUserprofile = val;
        // this.tempUserprofile.PaypalEmailVerified = val.HasVerifiedPaypalEmail;

        this.profileForm = new FormBuilder().group({
          nameCtl: [this.tempUserprofile.FullName, [Validators.required]],
          addressCtl: [this.tempUserprofile.Address, [Validators.required]],
          phonenumberCtl: [this.tempUserprofile.PhoneNumber, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
          emailCtl: [this.tempUserprofile.Email, [Validators.required, Validators.email]],
          paypalEmailCtl: [this.tempUserprofile.PaypalEmail, [Validators.required, Validators.email]],
        });
      }
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  composeModel() {
    this.tempUserprofile = new UserProfile();
    this.tempUserprofile.Name = this.f.nameCtl.value;
    this.tempUserprofile.Address = this.f.addressCtl.value;
    this.tempUserprofile.PhoneNumber = this.f.phonenumberCtl.value;
    this.tempUserprofile.PaypalEmail = this.f.paypalEmailCtl.value;
    this.tempUserprofile.Email = this.f.emailCtl.value;
  }

  saveProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.markAsDirty();
      this.profileForm.markAllAsTouched();
      return false;
    }
    this.composeModel();
    this.isSubmiting = true;
    this.profileService.updateCurrentUserInfo(this.tempUserprofile).subscribe(
      (res) => {
        this.notification.success('Update successfully', '');
        this.OnClose.emit();
      },
      (err) => {
        this.notification.error('Can not update your profile', 'please try later');
        this.isSubmiting = false;
      }, () => {
        this.isSubmiting = false;
      }
    );
    return true;
  }

  verifyEmail() {
    this.tempUserprofile.EmailVerifying = true;
    this.notification.success('Sent email for verify', 'Please check your inbox');
  }

  verifyPaypal() {
    this.tempUserprofile.PaypalEmailVerifying = true;
    this.notification.success('Sent email for verify', 'Please check your inbox');
  }

  reloadToVerify() {

  }
}
