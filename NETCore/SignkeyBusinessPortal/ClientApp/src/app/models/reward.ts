import { Edition } from './edition-plan';
import { User } from './user';
import { UserProfile } from './user-profile';

export class Reward {
  ReferencesId: string;
  SaleAgentId: number;
  SaleAgentCode: string;
  UserAppliedId: number;
  UserAppliedPlatformId: string;
  UserAppliedMethodId: string;
  DateCreated: Date;
  DateApplied: Date;
  IsValid: boolean;
  Deleted: boolean;
  Edition: Edition;

  UserAppliedDetail = new UserProfile({});

  constructor(data?) {
    if (data) {
      this.ReferencesId = data.ReferencesId || data.referencesId;
      this.SaleAgentId = data.SaleAgentId || data.saleAgentId;
      this.SaleAgentCode = data.SaleAgentCode || data.saleAgentCode;
      this.UserAppliedId = data.UserAppliedId || data.userAppliedId;
      this.UserAppliedPlatformId = data.UserAppliedPlatformId || data.userAppliedPlatformId;
      this.UserAppliedMethodId = data.UserAppliedMethodId || data.userAppliedMethodId;
      this.DateCreated = data.DateCreated || data.dateCreated;
      this.DateApplied = data.DateApplied || data.dateApplied;
      this.IsValid = data.IsValid || data.isValid;
      this.UserAppliedDetail = new UserProfile(data.userApplied || data.UserApplied);
      this.Edition = new Edition(data.Edition || data.edition);
    }
  }
}
