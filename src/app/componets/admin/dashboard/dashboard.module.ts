import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations: [DashboardComponent, InicioComponent, NavbarComponent],
	imports: [CommonModule, DashboardRoutingModule, SharedModule]
})
export class DashboardModule {}
