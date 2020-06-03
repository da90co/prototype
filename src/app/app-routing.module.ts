import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquityComponent } from './equity/equity.component';
import { MoreComponent } from './more/more.component';
import { RentComponent } from './rent/rent.component';
import { CustomerComponent } from './customer/customer.component';
import { PropertyComponent } from './property/property.component';
import { CasenotesComponent } from './casenotes/casenotes.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/equity",
    pathMatch: "full"
  },
  {
    path: "equity",
    component: EquityComponent
  },
  {
    path: "more",
    component: MoreComponent
  },
  {
    path: "rent",
    component: RentComponent
  },
  {
    path: "customer",
    component: CustomerComponent
  },
  {
    path: "property",
    component: PropertyComponent
  },
  {
    path: "casenotes",
    component: CasenotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
