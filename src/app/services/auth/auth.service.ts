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

	getUser(): Observable<any> {
		return this.http.get<any>(ENV.apiUrl + 'usuario');
	}

	getProfile() {
		const user_name = localStorage.getItem('user_name') ?? '';
		const parserString: string = JSON.parse(user_name);
		return parserString;
	}

	isAuthenticated() {
		return localStorage.getItem('user_name');
	}

	logout() {
		localStorage.removeItem('user_name');
		localStorage.removeItem('name');
		this.router.navigate(['/login']);
	}
}
