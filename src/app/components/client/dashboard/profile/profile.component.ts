import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.interface';
import { ClientService } from '@app/components/client/services/client.service';
import { Client } from '@app/components/client/models/client.interface';
import { AuthService } from '@app/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadComponent } from '../../../file-upload/file-upload.component';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	panelOpenState = false;
	client: Client;
	formulario: FormGroup;
	frmPareja: FormGroup;

	casadoTexto = 'Casado/a';
	enUnionTexto = 'En unión de hecho';

	constructor(
		private router: Router,
		private clientService: ClientService,
		private authService: AuthService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.formulario = this.fb.group({
			foto: [null],
			cedula_personal: [null],
			papeleta_votacion_personal: [null]
		});

		this.frmPareja = this.fb.group({
			cedula_conyugue: [null],
			papeleta_conyugue: [null]
		});

		const idUser = JSON.parse(this.authService.getProfile()).id;
		this.clientService.getClientById(idUser).subscribe((data) => {
			this.client = data;
			this.emparejado(data);
		});
	}

	emparejado(dato: Client) {
		if (
			dato.estado_civil.name === this.casadoTexto ||
			dato.estado_civil.name === this.enUnionTexto
		) {
			console.log('Acciones extra');
		}
	}

	addCliente(form: Cliente) {}
}
