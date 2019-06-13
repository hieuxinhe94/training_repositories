import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { TwBootstrapModuleModule } from './core-modules/tw-bootstrap-module/tw-bootstrap-module.module';
=======
import { PropertiesBindingComponent } from './components/properties-binding/properties-binding.component';
import { EventsBindingComponent } from './components/events-binding/events-binding.component';
import { SystemDirectivesComponent } from './components/system-directives/system-directives.component';

import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
>>>>>>> 00e3f5647c65e355126ebb65368cf872cec6219f

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    SidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    TwBootstrapModuleModule
=======
    PropertiesBindingComponent,
    EventsBindingComponent,
    SystemDirectivesComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
>>>>>>> 00e3f5647c65e355126ebb65368cf872cec6219f
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
