import { Injectable } from '@angular/core';

import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpheadersInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json'
			//'Authorization': 'my-auth-token'
		});

		request = request.clone({
			headers
		});

		return next.handle(request);
	}
}
