import { getDato } from './../componets/model/documentos.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { Cliente } from '../componets/model/cliente.interface';

@Injectable({
	providedIn: 'root'
})
export class DocumentosService {
	constructor(private http: HttpClient) {}

	getDatos(): Observable<getDato> {
		return this.http.get<getDato>(ENV.apiUrl + '/auth/getDatos');
	}

	getCliente(id: number) {
		return this.http.get<Cliente>(`${ENV.apiUrl}/auth/getCliente/${id}`);
	}
}
