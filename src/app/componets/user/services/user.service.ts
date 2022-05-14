import { listSol } from './../../model/listSol.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Authorization: 'my-auth-token'
	})
};

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) {}

	getlistSol(): Observable<listSol> {
		return this.http.get<listSol>(ENV.apiUrl + '/auth/listsol');
	}
}
