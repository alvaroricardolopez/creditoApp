import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '@app/components/client/models/client.interface';

@Component({
	selector: 'app-datos',
	templateUrl: './datos.component.html',
	styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
	estados: any = [];
	ClientForm: FormGroup;

	constructor(
		private clientService: ClientService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.ClientForm = this.formBuilder.group({
			nombres: [
				null,
				Validators.required,
				Validators.minLength(1),
				Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/)
			],
			apellidos: [
				null,
				Validators.required,
				Validators.minLength(1),
				Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/)
			],
			cedula: [
				null,
				Validators.required,
				Validators.minLength(9),
				Validators.maxLength(9),
				Validators.pattern(/^[0-9]*$/)
			],
			ciudad: [null, Validators.required],
			direccion: [
				null,
				Validators.required,
				Validators.minLength(1),
				Validators.pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/)
			],
			telefono: [
				"",
				Validators.pattern(/^[0-9]*$/)
			],
			celular: [
				null,
				Validators.required,
				Validators.minLength(9),
				Validators.maxLength(9),
				Validators.pattern(/^[0-9]*$/)
			],
			correo: [null, Validators.email],
			contrasenia: [null, Validators.required],
			estado_civil: [null, Validators.required]
		});
		this.listEstadoCivil();
	}

	addCliente(form: Client) {
		this.clientService
			.postClient(form)
			.subscribe((data) => console.log(data));
		alert('Registro existoso, ahora debe iniciar sesión.');
		this.router.navigate(['/login']);
	}

	listEstadoCivil() {
		this.clientService.getEstadoCivil().subscribe((data) => {
			this.estados = data;
		});
	}
}
