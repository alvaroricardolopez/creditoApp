import { DocumentosComponent } from './documentos/documentos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginUsersComponent } from '@app/components/loginUsers/login-users.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{ path: '', component: InicioComponent },
			{ path: 'solicitudes', component: SolicitudesComponent },
			{ path: 'buscar', component: BuscarComponent },
			{
				path: 'documentos/:num_sol',
				component: DocumentosComponent
			},
			{
				path: 'loginClient',
				component: LoginUsersComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
