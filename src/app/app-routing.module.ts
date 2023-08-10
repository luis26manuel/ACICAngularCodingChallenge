import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LineOfBusinessComponent } from './linesOfBusiness/linesOfBusiness.component';
import { LineOfBusinessDetailComponent } from './lineOfBusiness-detail/lineOfBusiness-detail.component';
//import { LineOfBusinessAmountsComponent } from './lineOfBusiness-amounts/lineOfBusiness-amounts.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  //{ path: 'amounts', component: LineOfBusinessAmountsComponent },
  { path: 'detail/:id', component: LineOfBusinessDetailComponent },
  { path: 'linesOfBusiness', component: LineOfBusinessComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
