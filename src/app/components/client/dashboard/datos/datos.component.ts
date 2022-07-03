import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from './../../models/client.interface';
import { ClientService } from '../../services/client.service';

@Component({
	selector: 'app-datos',
	templateUrl: './datos.component.html',
	styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
	ClientForm: FormGroup;

	constructor(
		private clientService: ClientService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.ClientForm = this.formBuilder.group({
			nombres: [null, Validators.required],
			apellidos: [null, Validators.required],
			cedula: [null, Validators.required],
			ciudad: [null, Validators.required],
			direccion: [null, Validators.required],
			telefono: [null],
			celular: [null, Validators.required],
			correo: [null, Validators.required],
			contrasenia: [null, Validators.required],
			estado: [true, Validators.required] //Estado por defecto?
		});
	}

	addCliente(form: Client) {
		this.clientService
			.postClient(form)
			.subscribe((data) => console.log(data));
		this.router.navigate(['/login']);
	}
}
