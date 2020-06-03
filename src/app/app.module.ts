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
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { RentComponent } from './rent/rent.component';
import { CustomerComponent } from './customer/customer.component';
import { PropertyComponent } from './property/property.component';
import { CasenotesComponent } from './casenotes/casenotes.component';

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
    InputReadonlyComponent,
    RentComponent,
    CustomerComponent,
    PropertyComponent,
    CasenotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
