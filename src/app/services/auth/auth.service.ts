import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '@environment/environment';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) {}

	getUser(email: string): Observable<any> {
		return this.http.get<any>(ENV.apiUrl + '/clientes?correo=' + email); //aqui vaun and para la consulta
	}

	getProfile() {
		const cliente = localStorage.getItem('cliente') ?? '';
		const parserString: string = JSON.parse(cliente);
		return parserString;
	}

	isAuthenticated() {
		return localStorage.getItem('cliente');
	}

	logout() {
		localStorage.removeItem('cliente');
		this.router.navigate(['/login']);
	}
}
