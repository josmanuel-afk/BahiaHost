

export interface Cliente {
  id_cliente: string;
  id_auth: string;
  nombre: string;
  apellido: string;
  documento_identidad?: string;
  telefono?: string;
  email: string;
  fecha_registro?: string;
   id_rol:number;
  roles?:{
    nombre_rol:string
  }
}


export type UserAction =
  | { type: "SET_CLIENTE"; payload: Cliente | null }
  | { type: "SET_RESERVAS"; payload: Reserva| null }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "SET_LOADING"; payload: boolean | null }
 | { type: "SET_PERSONAL"; payload: Personal | null }
  
 export interface UserState {
  cliente: Cliente | null;
  reservas: Reserva | null;
  error:string | null,
  loading: boolean | null
  personal:Personal | null

}


interface Reserva {
  id_reserva: number;
  habitaciones: { numero: string };
  id_cliente: number;
  id_habitacion: number;
}[]


 


export interface Personal {
nombre:string
apellido:string
cargo:string
telefono:string
email:string
id_rol:Number
id_auth:string
id_personal:number
roles:{
  nombre_rol:string
}
}


