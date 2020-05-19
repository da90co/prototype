import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquityComponent } from './equity/equity.component';
import { MoreComponent } from './more/more.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  },
  {
    path: "equity",
    component: EquityComponent
  },
  {
    path: "more",
    component: MoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
