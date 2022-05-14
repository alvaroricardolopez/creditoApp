import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatosComponent } from './datos/datos.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MofificarComponent } from './mofificar/mofificar.component';
import { ModificarComponent } from './modificar/modificar.component';

@NgModule({
	declarations: [
		DashboardComponent,
		InicioComponent,
		NavbarComponent,
		DatosComponent,
		SolicitudComponent,
		BuscarComponent,
		MofificarComponent,
		ModificarComponent
	],
	imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
