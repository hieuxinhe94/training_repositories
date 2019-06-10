import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertiesBindingComponent } from './components/properties-binding/properties-binding.component';
import { EventsBindingComponent } from './components/events-binding/events-binding.component';
import { SystemDirectivesComponent } from './components/system-directives/system-directives.component';

import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesBindingComponent,
    EventsBindingComponent,
    SystemDirectivesComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
