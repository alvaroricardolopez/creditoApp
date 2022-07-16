import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { listSol, Data } from './../../../model/listSol.interface';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-solicitudes',
	templateUrl: './solicitudes.component.html',
	styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {
	listSols: any = [];
	constructor(
		private userService: UserService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.userService.getlistSol().subscribe((response: any) => {
			this.listSols = response;
			// console.log(this.listSols);
		});
	}

	revisarSol(num_sol: number) {
		//this.router.navigate(["../dashboard/documentos", id])
		this.router.navigate(['/users/documentos/', num_sol]);
	}
}
