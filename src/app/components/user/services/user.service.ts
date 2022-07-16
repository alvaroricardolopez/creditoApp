import { listSol } from './../../model/listSol.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) {}

	getlistSol(): Observable<listSol> {
		return this.http.get<listSol>(ENV.apiUrl + '/solicitud-de-creditos');
	}
	getlistSolById(id: number): Observable<listSol> {
		return this.http.get<listSol>(
			ENV.apiUrl + '/solicitud-de-creditos/' + id.toString()
		);
	}
}
