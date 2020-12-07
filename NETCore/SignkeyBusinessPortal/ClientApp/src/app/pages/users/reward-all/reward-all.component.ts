import { Component, OnInit } from '@angular/core';
import { Reward } from 'src/app/models/reward';
import { RewardSummary } from 'src/app/models/reward-summary';
import { RewardService } from 'src/app/services/reward.service';

@Component({
  selector: 'sk-reward-all',
  templateUrl: './reward-all.component.html',
  styleUrls: ['./reward-all.component.scss']
})
export class RewardAllComponent implements OnInit {

  IsLoading = false;
  rewards: Reward[];
  rewardSummary: RewardSummary;

  constructor(private rewardService: RewardService) { }

  ngOnInit(): void {

    this.IsLoading = true;
    this.rewardService.getRewards().subscribe((val) => {
      this.rewards = [];
      if (val.result && val.result.rewards.length) {
        this.rewardSummary = new RewardSummary(val.result?.rewardSummary);
        val.result.rewards.forEach(item => {
          this.rewards.push(new Reward(item));
        });
      }
    },
      (err) => {
        this.IsLoading = false;
      },
      () => { this.IsLoading = false; });
  }

}
