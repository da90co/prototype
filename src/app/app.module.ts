import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubnavComponent } from './navbar/subnav/subnav.component';
import { SettingsComponent } from './settings/settings.component';
import { MoreComponent } from './more/more.component';
import { EquityComponent } from './equity/equity.component';
import { PanelComponent } from './components/panel/panel.component';
import { InputComponent } from './components/input/input.component';
import { InputReadonlyComponent } from './components/input/input-readonly/input-readonly.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubnavComponent,
    SettingsComponent,
    MoreComponent,
    EquityComponent,
    PanelComponent,
    InputComponent,
    InputReadonlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
