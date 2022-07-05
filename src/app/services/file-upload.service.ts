import { environment as ENV } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class FileUploadService {
	constructor(private http: HttpClient) {}
	upload(file: File) {
		const formData = new FormData();
		formData.append('file', file);
		// const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
		//   reportProgress: true,
		//   responseType: 'json'
		// });
		// return this.http.request(req);
		console.log(formData);
		return this.http.post(ENV.apiUrl + '/upload', formData);
	}

	getFiles(): Observable<any> {
		return this.http.get(ENV.apiUrl + '/upload/files');
	}
}
