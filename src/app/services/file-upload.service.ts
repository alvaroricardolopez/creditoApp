import { environment as ENV } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class FileUploadService {
	constructor(private http: HttpClient) {}
	upload(file: File): any {
		const formData = new FormData();
		formData.append('files', file);
		return this.http.post(ENV.apiUrl + '/upload/', formData);
	}

	getFiles(): Observable<any> {
		return this.http.get(ENV.apiUrl + '/upload/files');
	}
}
