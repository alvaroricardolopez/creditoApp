import { environment as ENV } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../components/model/cliente.interface';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {
	constructor(private http: HttpClient) {}

	registro(client: Cliente) {
		const json = JSON.stringify(client);
		return this.http.post(ENV.apiUrl + '/socio/registro', json);
	}
}
