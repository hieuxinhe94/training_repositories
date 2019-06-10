import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { TwBootstrapModuleModule } from './core-modules/tw-bootstrap-module/tw-bootstrap-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    TwBootstrapModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
