export interface Client {
	nombres: string;
	apellidos: string;
	ciudad: string;
	direccion: string;
	telefono: number;
	celular: number;
	correo: string;
	cedula: string;
	estado_civil: any;
	documentos_de_clientes?: DocumentosDeCliente[];
	solicitud_de_creditos?: any[];
}

export interface DocumentosDeCliente {
	id: number;
	tipo_de_documento: number;
	cliente: number;
	created_at: string;
	updated_at: string;
	estado: any;
	archivo?: Archivo;
}

export interface Archivo {
	id: number;
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	created_at: string;
	updated_at: string;
}

export interface Formats {
	thumbnail: Thumbnail;
	small: Small;
}

export interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: any;
	url: string;
}

export interface Small {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path: any;
	url: string;
}
