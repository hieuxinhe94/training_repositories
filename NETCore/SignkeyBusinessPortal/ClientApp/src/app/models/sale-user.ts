import { SaleAgentInfoModel } from './register-result-model'
import { User } from './user'

export class SaleAgentUserInfo {
  SaleInfo: SaleAgentInfoModel;
  Info: User;

  constructor(data?: any) {
    if (data) {
      this.SaleInfo = data.saleInfo || data.SaleInfo;
      this.Info = data.Info || data.info;
    }
  }
}
