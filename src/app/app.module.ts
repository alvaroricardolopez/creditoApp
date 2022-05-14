import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './componets/shared/shared.module';

//Componentes
import { LoginComponent } from './componets/login/login.component';
import { DatosComponent } from './componets/client/datos/datos.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, DatosComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
