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

	getClient(email: string): Observable<any> {
		return this.http.get<any>(ENV.apiUrl + '/clientes?correo=' + email);
	}

	getUser(email: string): Observable<any> {
		return this.http.get<any>(ENV.apiUrl + '/usuarios?correo=' + email);
	}

	getProfile() {
		return localStorage.getItem('cliente') ?? '';
	}

	isAuthenticatedClient() {
		return localStorage.getItem('cliente');
	}

  isAuthenticatedUser() {
    return localStorage.getItem('user');
  }

	logoutClient() {
		localStorage.removeItem('cliente');
		this.router.navigate(['client/login']);
	}

  logoutUser() {
    localStorage.removeItem('user');
    this.router.navigate(['users/login']);
  }
}
