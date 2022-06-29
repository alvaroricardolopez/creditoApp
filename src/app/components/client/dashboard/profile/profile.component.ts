import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/components/model/cliente.interface';
import { ClientService } from '@app/components/client/services/client.service';
import { Client } from '@app/components/client/models/client.interface';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	client: Client;
	constructor(private router: Router, private clientService: ClientService) {}

	ngOnInit(): void {
		this.clientService.getClientById(5).subscribe((data) => {
			this.client = data;
		});
	}

	addCliente(form: Cliente) {}
}
