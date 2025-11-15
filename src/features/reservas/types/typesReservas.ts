


export interface Reserva {
  id_cliente: number;
  clientes: {
    nombre: string;
    apellido: string;
  };
  habitaciones: {
    numero: string;
  };
}
  
export interface DataGym {
  id_reserva: number;
  fecha: string;
  hora: string;
  duracion: number;
  reservas: Reserva;
}