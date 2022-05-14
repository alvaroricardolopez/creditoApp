import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './buscar/buscar.component';
import { DashboardComponent } from './dashboard.component';
import { DatosComponent } from './datos/datos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModificarComponent } from './modificar/modificar.component';
import { MofificarComponent } from './mofificar/mofificar.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: [
			{ path: '', component: InicioComponent },
			{ path: 'ingresar', component: DatosComponent },
			{ path: 'buscar', component: BuscarComponent },
			{ path: 'modificar', component: ModificarComponent },
			{ path: 'solicitud', component: SolicitudComponent },
			{ path: 'buscador', component: MofificarComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule {}
