import { useContext, useMemo } from "react";
import { RecepcionContext } from "../context/RecepcionContext";

export const useHuespedes = () => {
  const { reservas, clientes, habitaciones } = useContext(RecepcionContext);

  const huespedes = useMemo(() => {
    return reservas?.data?.map((reserva: any) => {
      const cliente = clientes?.data?.find(
        (c: any) => c.id_cliente === reserva.id_cliente
      );
      const habitacion = habitaciones?.data?.find(
        (h: any) => h.id_habitacion === reserva.id_habitacion
      );

      return {
        id: reserva.id_reserva,
        nombre: `${cliente?.nombre} ${cliente?.apellido}`,
        habitacion: habitacion?.numero,
        estado: reserva.estado,
        checkIn: reserva.fecha_check_in,
        checkOut: reserva.fecha_check_out,
      };
    }) || [];
  }, [reservas?.data, clientes?.data, habitaciones?.data]); 

  return huespedes;
};

