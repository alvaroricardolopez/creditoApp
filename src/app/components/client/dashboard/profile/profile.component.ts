import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.interface';
import { ClientService } from '@app/components/client/services/client.service';
import { Client } from '@app/components/client/models/client.interface';
import { AuthService } from '@app/services/auth/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '@app/services/file-upload.service';

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
		private fb: FormBuilder,
		private uploadService: FileUploadService
	) {}

	ngOnInit(): void {
		this.formulario = this.fb.group({
			foto: null,
			cedula_personal: null,
			papeleta_votacion_personal: null,
			cedulaconyuge: null,
			papeleta_conyugue: null,
			fileFoto: '',
			fileSourceFoto: '',
			fileCedulaPersonal: '',
			filePapeleta: ''
		});

		const idUser = JSON.parse(this.authService.getProfile()).id;
		this.clientService.getClientById(idUser).subscribe((data) => {
			this.client = data;
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

	onFileChange(event: any) {
		console.log(event.target.id);
		if (event.target.id === 'fileFoto') {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				this.formulario.patchValue({
					fileSourceFoto: file
				});
			}
		}

		if (event.target.id === 'fileCedulaPersonal') {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				this.formulario.patchValue({
					fileCedulaPersonal: file
				});
			}
		}

		if (event.target.id === 'filePapeleta') {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				this.formulario.patchValue({
					filePapeleta: file
				});
			}
		}
	}

	addCliente(form: any) {
		console.log(form);

		this.uploadService
			.upload(this.formulario.get('fileSourceFoto')!.value)
			.subscribe((response: any) => {
				this.formulario.patchValue({
					foto: response[0].id
				});
			});

		this.uploadService
			.upload(this.formulario.get('fileCedulaPersonal')!.value)
			.subscribe((response: any) => {
				this.formulario.patchValue({
					cedula_personal: response[0].id
				});
			});

		this.uploadService
			.upload(this.formulario.get('filePapeleta')!.value)
			.subscribe((response: any) => {
				this.formulario.patchValue({
					papeleta_votacion_personal: response[0].id
				});
			});
		//Aquí se establece a que cliente pertenecen los archivos a traves del id de localStorage
	}
}
