import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { LoginUsersComponent } from '@app/components/loginUsers/login-users.component';

@NgModule({
	declarations: [
		DashboardComponent,
		InicioComponent,
		NavbarComponent,
		SolicitudesComponent,
		BuscarComponent,
		DocumentosComponent,
		LoginUsersComponent
	],
	imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
