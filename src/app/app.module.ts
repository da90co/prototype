import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubnavComponent } from './navbar/subnav/subnav.component';
import { SettingsComponent } from './settings/settings.component';
import { MoreComponent } from './more/more.component';
import { EquityComponent } from './equity/equity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavComponent,
    SettingsComponent,
    MoreComponent,
    EquityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
