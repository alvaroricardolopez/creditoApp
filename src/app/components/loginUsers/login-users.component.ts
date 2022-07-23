import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
	selector: 'app-loginClient',
	templateUrl: './login-users.component.html',
	styleUrls: ['./login-users.component.css']
})
export class LoginUsersComponent implements OnInit {
	form: FormGroup;
	loading = false;

	constructor(
		private fb: FormBuilder,
		private authservice: AuthService,
		private router: Router
	) {
		this.form = this.fb.group({
			user_name: ['', Validators.required],
			contrasenia: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		if (this.authservice.isAuthenticatedUser()) {
			this.router.navigate(['/users/solicitudes']);
		}
	}

	ingresar(form: any) {
		const user_name = form.user_name;
		const contrasenia = form.contrasenia;
		let correoCoincide = false;
		let contraseniaCoincide = false;

		this.authservice.getUser(user_name).subscribe((data) => {
			if (data.length !== 0) {
				correoCoincide = true;
				if (data[0].contrasenia === contrasenia) {
					contraseniaCoincide = true;
					const user = {
						id: data[0].id,
						nombres: data[0].nombres,
						apellidos: data[0].apellidos,
						correo: data[0].correo
					};
					localStorage.setItem('user', JSON.stringify(user));
					this.router.navigate(['/users/solicitudes']);
				}
			}
			if (!(correoCoincide && contraseniaCoincide)) {
				alert('Credenciales inválidas');
			}
		});
	}
}
