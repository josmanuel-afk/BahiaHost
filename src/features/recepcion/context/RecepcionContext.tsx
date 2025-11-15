import  { createContext,} from 'react';
import type usefechData from '../../../shared/Utils/usefechData';


export interface DataHotel {
  clientes: ReturnType<typeof usefechData<any>>;
  habitaciones: ReturnType<typeof usefechData<any>>;
  reservas: ReturnType<typeof usefechData<any>>;
  categoria_Habitacion: ReturnType<typeof usefechData<any>>;

}

  export const RecepcionContext = createContext<DataHotel>(null!)
