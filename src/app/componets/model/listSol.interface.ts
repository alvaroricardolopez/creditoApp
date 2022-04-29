export interface Cliente {
  id_cliente: number;
  nombre1_cliente: string;
  nombre2_cliente: string;
  apellido1_cliente: string;
  apellido2_cliente: string;
  cedula_cliente: string;
}

export interface Data {
  num_sol: number;
  nombre: string;
  monto: string;
  created_at: Date;
  estado_sol : string;
  cliente: Cliente;
}

export interface listSol {
  data: Data[];
}
