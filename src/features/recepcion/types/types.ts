  export interface Cliente {
    id_cliente?:number,
    telefono:string,
    email:string,
    fecha_registro:string
    apellido:string
    documento_identidad:string
    id_auth?:string | null
    nombre:string
  }



export interface Habitacion {
  id_habitacion: number,
  numero:string,
  tipo:string,
  estado:string,
  precio_noche : number,
  capacidad: number,
  descripcion:string
  id_categoria:number
}

export interface Reserva {
   id_reserva: number,
    id_cliente: string,
    id_habitacion: number,
    fecha_check_in: Date,
    fecha_check_out: Date,
    estado:string,
    total: string,
}

export interface FetchState<T> {
  data: T[] | null;
  isLoading: boolean;
  error: string | null;
}


export interface DataHotel {
  clientes: FetchState<Cliente>;
  habitaciones: FetchState<Habitacion>;
  reservas: FetchState<Reserva>;
  refresh: () => Promise<void>
}

export interface Roles {
 id_rol:number,
 nombre_rol:string,
 permisos:string
}


export interface Personal {
 id_personal:number,
 nombre:string,
 apellido:string,
 cargo:string,
 telefono?:string,
 emaiil?:string
id_rol:number
}


export interface Huesped {
  id: any;
  nombre: string;
  habitacion: any;
  estado: any;
  checkIn: any;
  checkOut: any;
};


export interface Categoria_Habitacion {
 nombre:string,
 precio:number,
 capacidad:number,
 img?:string,

}
