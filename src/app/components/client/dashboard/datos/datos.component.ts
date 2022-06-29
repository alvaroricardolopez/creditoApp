import { Router } from '@angular/router';
import { ClienteService } from '@app/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/components/model/cliente.interface';

@Component({
	selector: 'app-datos',
	templateUrl: './datos.component.html',
	styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
	ClientForm: FormGroup;

	constructor(
		private clienteService: ClienteService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit(): void {
		this.ClientForm = this.formBuilder.group({
			nombre1_cliente: [null, Validators.required],
			nombre2_cliente: [null, Validators.required],
			apellido1_cliente: [null, Validators.required],
			apellido2_cliente: [null, Validators.required],
			cedula_cliente: [null, Validators.required],
			ciudad_cliente: [null, Validators.required],
			direccion_cliente: [null, Validators.required],
			telefono_cliente: [null],
			celular_cliente: [null, Validators.required],
			email_cliente: [null, Validators.required],
			estado_cliente: ['Nuevo', Validators.required]
		});
	}

	addCliente(form: Cliente) {
		this.clienteService
			.registro(form)
			.subscribe((data) => console.log(data));
		this.router.navigate(['/credito/buscador']);
	}
}
