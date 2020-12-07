export class UserProfile {

  FullName: string;
  Username: string;
  Name: string;
  Surname: string;
  Address: string;

  Email: string;
  EmailVerified: boolean;
  EmailVerifying: boolean;

  ReferralCode: string;
  ReferralLink : string;

  PhoneNumber: string;
  PhoneVerified: boolean;
  PhoneVerifying: boolean;

  PaypalEmail: string;
  PaypalEmailVerified: boolean;
  PaypalEmailVerifying: boolean;

  IsActive: string;
  CreationTime: Date;

  constructor(data?: any) {
    if (data) {
      this.FullName = data.FullName || data.fullName;
      this.Name = data.Name || data.name;
      this.Surname = data.Surname || data.surname;
      this.Email = data.email || data.EmailAddress|| data.emailAddress || data.Email;
      this.Address = data.Address || data.address;
      this.ReferralCode = data.ReferralCode || data.referralCode;
      this.ReferralLink = data.ReferralLink || data.referralLink;
      this.EmailVerified = data.IsEmailConfirmed || data.emailVerified;
      this.PhoneNumber = data.PhoneNumber || data.phoneNumber;
      this.PhoneVerified = data.PhoneVerified || data.phoneVerified;
      this.PaypalEmail = data.PaypalEmail || data.paypalEmail;
      this.PaypalEmailVerified = data.PaypalEmailVerified || data.paypalEmailVerified;
      this.IsActive = data.IsActive || data.isActive;
      this.CreationTime = data.CreationTime || data.creationTime;
      ///
    }
  }
}
