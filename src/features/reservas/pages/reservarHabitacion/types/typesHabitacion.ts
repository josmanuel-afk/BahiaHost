import type { Dayjs } from "dayjs";

export interface Habitacion 
   {
      descripcion: string;
      estado: string;
      id_categoria: string;
      id_habitacion: string;
      numero:string
      categorias_habitacion:{
        capacidad: Number
        img:string,
        precio:number
        nombre:string
      }

    }

export interface FormData {
  entrada: Dayjs | null;
  salida: Dayjs | null;
 habitaciones:any
}

export interface HabitacionProps
   {
      habitaciones:Habitacion[]
       formData:FormData
    }






export interface filtroTypes {
  setFiltroHabitaciones: React.Dispatch<React.SetStateAction<Habitacion[]>>;       
  habitaciones: Habitacion[];
  formData:FormData
setForm: React.Dispatch<React.SetStateAction<FormData>>;
}


export interface categorias_habitacion {
capacida: number; 
id_categoria: number 
img:string;
precio:number
nombre:string
}