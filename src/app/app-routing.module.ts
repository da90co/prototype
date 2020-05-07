import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquityComponent } from './equity/equity.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "equity",
    component: EquityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
