"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RewardAllComponent = void 0;
var core_1 = require("@angular/core");
var reward_1 = require("src/app/models/reward");
var reward_summary_1 = require("src/app/models/reward-summary");
var RewardAllComponent = /** @class */ (function () {
    function RewardAllComponent(rewardService) {
        this.rewardService = rewardService;
        this.IsLoading = false;
    }
    RewardAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.IsLoading = true;
        this.rewardService.getRewards().subscribe(function (val) {
            _this.rewardSummary = new reward_summary_1.RewardSummary(val.result.rewardSummary);
            _this.rewards = [];
            if (val.result.rewards && val.result.rewards.length) {
                val.result.rewards.forEach(function (item) {
                    _this.rewards.push(new reward_1.Reward(item));
                });
            }
        }, function (err) {
            _this.IsLoading = false;
        }, function () { _this.IsLoading = false; });
    };
    RewardAllComponent = __decorate([
        core_1.Component({
            selector: 'sk-reward-all',
            templateUrl: './reward-all.component.html',
            styleUrls: ['./reward-all.component.scss']
        })
    ], RewardAllComponent);
    return RewardAllComponent;
}());
exports.RewardAllComponent = RewardAllComponent;
