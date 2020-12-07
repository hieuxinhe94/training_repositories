"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var users_routing_module_1 = require("./users-routing.module");
var ant_module_1 = require("./ant.module");
var layout_component_1 = require("./layout/layout.component");
var referal_code_component_1 = require("./referal-code/referal-code.component");
var user_profile_component_1 = require("./user-profile/user-profile.component");
var introduce_component_1 = require("./introduce/introduce.component");
var reward_all_component_1 = require("./reward-all/reward-all.component");
var edit_profile_component_1 = require("./edit-profile/edit-profile.component");
var payout_log_component_1 = require("./payout-log/payout-log.component");
var reward_purchasing_component_1 = require("./reward-purchasing/reward-purchasing.component");
var forms_1 = require("@angular/forms");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            declarations: [layout_component_1.LayoutComponent,
                referal_code_component_1.ReferalCodeComponent,
                user_profile_component_1.UserProfileComponent,
                introduce_component_1.IntroduceComponent,
                reward_all_component_1.RewardAllComponent,
                edit_profile_component_1.EditProfileComponent,
                payout_log_component_1.PayoutLogComponent,
                reward_purchasing_component_1.RewardPurchasingComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                users_routing_module_1.UsersRoutingModule,
                ant_module_1.AntDesingModule
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
