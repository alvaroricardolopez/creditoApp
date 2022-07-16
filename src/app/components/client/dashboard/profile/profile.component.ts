import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '@app/components/client/services/client.service';
import { Client } from '@app/components/client/models/client.interface';
import { AuthService } from '@app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
			fileFoto: [null, Validators.required],
			fileCedulaPersonal: [null, Validators.required],
			filePapeleta: [null, Validators.required],
			fileCedulaConyugue: '',
			filePapeletaConyugue: ''
		});

		const idUser = JSON.parse(this.authService.getProfile()).id;
		this.clientService.getClientById(idUser).subscribe((data: Client) => {
			this.client = data;
		});
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

		if (event.target.id === 'fileCedulaConyugue') {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				this.formulario.patchValue({
					fileCedulaConyugue: file
				});
			}
		}
		if (event.target.id === 'filePapeletaConyugue') {
			if (event.target.files.length > 0) {
				const file = event.target.files[0];
				this.formulario.patchValue({
					filePapeletaConyugue: file
				});
			}
		}
	}

	addCliente(form: any) {
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
	}
}
