
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/guard/auth.guard';
import { LoginComponent } from '@app/components/login/login.component';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		children: [
			{
				path: 'users',
				loadChildren: () =>
					import('./components/user/dashboard/dashboard.module').then(
						(x) => x.DashboardModule
					)
			},
			{
				path: 'client',
				loadChildren: () =>
					import(
						'./components/client/dashboard/dashboard.module'
					).then((y) => y.DashboardModule)
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('./components/admin/dashboard/dashboard.module').then(
						(z) => z.DashboardModule
					)
			}
		]
	},
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
