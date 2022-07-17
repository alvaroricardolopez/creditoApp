import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
	CanActivate,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/services/auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, public authService: AuthService) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (this.router.url.includes('users')) {
			if (this.authService.isAuthenticatedUser()) {
				return true;
			} else {
				this.router.navigate(['users/login']);
				return false;
			}
		} else {
			if (this.authService.isAuthenticatedClient()) {
				return true;
			} else {
				this.router.navigate(['client/login']);
				return false;
			}
		}
	}
}
