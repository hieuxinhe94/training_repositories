import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AntDesingModule } from './ant.module';
import { LayoutComponent } from './layout/layout.component';
import { ReferalCodeComponent } from './referal-code/referal-code.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { RewardAllComponent } from './reward-all/reward-all.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PayoutLogComponent } from './payout-log/payout-log.component';
import { RewardPurchasingComponent } from './reward-purchasing/reward-purchasing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembershipComponent } from './membership/membership.component';


@NgModule({
  declarations: [LayoutComponent,
    ReferalCodeComponent,
    UserProfileComponent,
    IntroduceComponent,
    RewardAllComponent,
    EditProfileComponent,
    PayoutLogComponent,
    RewardPurchasingComponent,
    MembershipComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    AntDesingModule
  ]
})
export class UsersModule { }
