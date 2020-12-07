export class RewardSummary {
  TotalUsers: number;
  TotalRewardedUsers: number;
  TotalMoneyEarned: number;

  constructor(data?) {
    if (data) {
      this.TotalUsers = data.TotalUsers || data.totalUsers;
      this.TotalRewardedUsers = data.TotalRewardedUsers || data.TotalRewardedUsers;
      this.TotalMoneyEarned = data.TotalMoneyEarned || data.totalMoneyEarned;
    }
  }
}
