import { EntityStatus } from './base-response-model';
import { User } from './user';
import { UserProfile } from './user-profile';

export class RegisterResultModel {
  Status: EntityStatus;
  UserInfo: SaleAgentInfoModel;
  Message: string;
}

export class SaleAgentInfoModel {
  ReferencesId: string;
  Email: string;
  PhoneNumber: string;
  HasVerifiedEmail: boolean;
  VerifiedEmailDate: Date;
  PaypalEmail: string;
  HasVerifiedPaypalEmail: boolean;
  VerifiedPaypalEmailDate: Date;
  SaleCode: string;
  SaleCodeCanActive: boolean;
  DateGeneratedCode: Date;
  IsDeleted: boolean;
  DeleterUserId: number;
  DeletionTime: Date;
  LastModificationTime: Date;
  LastModifierUserId: number;
  CreationTime: Date;
  CreatorUserId: number;
  Id: string;

  UserDetail: UserProfile;
  /**
   *
   */
  constructor(data?: any) {
    if (data) {
      this.Id = data.Id || data.id;
      this.Email = data.email || data.EmailAddress|| data.emailAddress || data.Email;
      this.PhoneNumber = data.PhoneNumber || data.phoneNumber;
      this.SaleCode = data.SaleCode || data.saleCode;
      this.PaypalEmail = data.PaypalEmail || data.paypalEmail;
      ///
    }
    this.UserDetail = new UserProfile({});
  }
}
