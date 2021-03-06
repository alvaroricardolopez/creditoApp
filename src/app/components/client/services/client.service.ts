import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from '@environment/environment';
import {
	Client,
	EstadoCivil
} from '@app/components/client/models/client.interface';

@Injectable({
	providedIn: 'root'
})
export class ClientService {
	constructor(private http: HttpClient) {}

	getClientById(id: number): Observable<Client> {
		return this.http.get<Client>(ENV.apiUrl + '/clientes/' + id.toString());
	}

	postClient(client: Client) {
		return this.http.post(ENV.apiUrl + '/clientes', client);
	}
	getEstadoCivil() {
		return this.http.get(ENV.apiUrl + '/estado-civils');
	}
}
