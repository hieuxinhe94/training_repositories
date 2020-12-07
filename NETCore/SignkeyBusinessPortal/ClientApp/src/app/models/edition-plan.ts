
export class Edition {
  Name: string;
  DisplayName: null | string;
  IsDeleted: boolean;
  DeleterUserID: null;
  DeletionTime: null;
  Id: number;
  MonthlyPrice?: number;
  MonthlyPriceID?: null;
  ProductID?: null;

  constructor(data?) {
    if (data) {
      this.Name = data.Name || data.name;
      this.DisplayName = data.DisplayName || data.displayName;
      this.IsDeleted = data.IsDeleted || data.isDeleted;
      this.MonthlyPrice = data.MonthlyPrice || data.monthlyPrice;
      this.MonthlyPriceID = data.MonthlyPriceID || data.MonthlyPriceID;
    }
  }
}
