export interface Solicitud {
	num_sol: number;
	nombre: string;
	monto: string;
	created_at: Date;
	estado_sol: string;
}

export interface Dato {
	doc: string;
	tipo_doc: string;
	observacion: string;
	estado_doc: string;
	num_presol: string;
	solicitud: Solicitud;
}

export interface getDato {
	dato: Dato[];
}
