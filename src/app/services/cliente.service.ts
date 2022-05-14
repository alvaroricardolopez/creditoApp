import { environment as ENV } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Cliente } from '../componets/model/cliente.interface';

const httpOption = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Authorization: 'my-auth-toke'
	})
};

@Injectable({
	providedIn: 'root'
})
export class ClienteService {
	constructor(private http: HttpClient) {}

	registro(client: Cliente) {
		const json = JSON.stringify(client);
		return this.http.post(ENV.apiUrl + '/socio/registro', json, httpOption);
	}
}
