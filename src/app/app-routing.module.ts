import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './config/guard/auth.guard';
import { LoginClientComponent } from '@app/components/loginClient/login-client.component';
import { DatosComponent } from './components/client/dashboard/datos/datos.component';
import { LoginUsersComponent } from '@app/components/loginUsers/login-users.component';

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
			}
		]
	},
	{ path: 'client/login', component: LoginClientComponent },
	{ path: 'users/login', component: LoginUsersComponent },
	{ path: 'registro', component: DatosComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
