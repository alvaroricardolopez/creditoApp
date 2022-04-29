import { LoginComponent } from './componets/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', loadChildren: ()=> import('./componets/user/dashboard/dashboard.module'). then(x => x.DashboardModule)},
  { path: 'credito', loadChildren: ()=> import('./componets/client/dashboard/dashboard.module'). then(y => y.DashboardModule)},
  { path: 'dashboard', loadChildren: ()=> import('./componets/admin/dashboard/dashboard.module'). then(z => z.DashboardModule)},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
