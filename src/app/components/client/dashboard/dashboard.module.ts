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
import { ModificarComponent } from './modificar/modificar.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [
		DashboardComponent,
		InicioComponent,
		NavbarComponent,
		DatosComponent,
		SolicitudComponent,
		BuscarComponent,
		ModificarComponent,
		ProfileComponent
	],
	imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
