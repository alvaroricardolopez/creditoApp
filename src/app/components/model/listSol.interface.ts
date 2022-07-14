export interface Cliente {
	id: number;
	nombres: string;
	apellidos: string;
	cedula: string;
}

export interface Data {
	id: number;
	monto_solicitado: string;
	fecha: Date;
	condicion: string;
	cliente: Cliente;
}

export interface listSol {
	data: Data[];
}
