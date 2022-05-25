import { environment as ENV } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ClienteService {
	constructor(private http: HttpClient) {}

	uploadFile(file: File) {
		const formData = new FormData();
		formData.append('file', file);
		return this.http.post(ENV.apiUrl + '/upload', formData);
	}
}
