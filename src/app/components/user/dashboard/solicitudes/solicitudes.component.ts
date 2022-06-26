import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { listSol, Data } from './../../../model/listSol.interface';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-solicitudes',
	templateUrl: './solicitudes.component.html',
	styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
	listSols: listSol;
	constructor(private userService: UserService, private router: Router) {}

	ngOnInit(): void {
		this.userService.getlistSol().subscribe((response: listSol) => {
			this.listSols = response;
			console.log(this.listSols);
		});
	}

	revisarSol(id_cliente: number, num_sol: number) {
		//this.router.navigate(["../dashboard/documentos", id])
		this.router.navigate(['/dashboard/documentos', num_sol, id_cliente]);
	}
}
