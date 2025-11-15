import type { ReactNode } from "react";
import usefechData from "../../../shared/Utils/usefechData";
import { RecepcionContext } from "./RecepcionContext";
import type { Categoria_Habitacion, Cliente, Habitacion, Reserva, } from "../types/types";




export const RecepcionProvider = ({ children }: { children: ReactNode }) => {
  const clientes = usefechData<Cliente>("clientes");
  const habitaciones = usefechData<Habitacion>("habitaciones");
  const reservas = usefechData<Reserva>("reservas");
    const categoria_Habitacion = usefechData<Categoria_Habitacion>("categorias_habitacion");


  return (
    <RecepcionContext.Provider value={{ clientes, habitaciones, reservas,categoria_Habitacion }}>
      {children}
    </RecepcionContext.Provider>
  );
};