import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { OurBusinessComponent } from './our-business/our-business.component';
import { OurBenefitsComponent } from './our-benefits/our-benefits.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { EstimateToolComponent } from './estimate-tool/estimate-tool.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [WelcomeRoutingModule, AuthModule, NzModalModule, CommonModule],
  declarations: [WelcomeComponent,
    HeaderComponent,
    OurBusinessComponent,
    OurBenefitsComponent,
    FooterComponent,
    BannerComponent,
    EstimateToolComponent,
    ProductComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {

  /**
   *
   */

}
