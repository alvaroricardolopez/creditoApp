import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.interface';
import { ClientService } from '@app/components/client/services/client.service';
import { Client } from '@app/components/client/models/client.interface';
import { AuthService } from '@app/services/auth/auth.service';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	client: Client;
	constructor(
		private router: Router,
		private clientService: ClientService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		const idUser = JSON.parse(this.authService.getProfile()).id;
		this.clientService.getClientById(idUser).subscribe((data) => {
			this.client = data;
		});
	}

	addCliente(form: Cliente) {}
}
