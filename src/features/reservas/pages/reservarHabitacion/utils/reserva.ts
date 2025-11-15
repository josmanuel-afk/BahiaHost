import { supaBase } from "../../../../../api/supabase/clienst";

  
  export const FetchReserva = async (formData:any) => {
  try {
    const entrada = formData.entrada?.toISOString();
    const salida = formData.salida?.toISOString();

    if (!entrada || !salida) {
      throw new Error("Debes seleccionar fecha de entrada y salida.");
    }

    const { data: reservas, error: errorReservas } = await supaBase
      .from("reservas")
      .select("*")
      .lte("fecha_check_in", salida)
      .gte("fecha_check_out", entrada);

    if (errorReservas) {
      console.error("Error al obtener reservas:", errorReservas);
      throw errorReservas;
    }

   console.log("reservas",reservas)

    const ocupadasString =
      reservas && reservas.length > 0
        ? `(${reservas.map(r => r.id_habitacion).join(",")})`
        : "()"; 


    const { data: habitacionesDisponibles, error } = await supaBase
      .from("habitaciones")
      .select("*")
      .not("estado", "in", '("limpieza","mantenimiento","ocupada")') 
      .not("id_habitacion", "in", ocupadasString); 

    if (error) {
      console.error("Error al obtener habitaciones disponibles:", error);
      throw error;
    }

    console.log("Habitaciones disponibles:", habitacionesDisponibles);
    return habitacionesDisponibles;

  } catch (err: any) {
    console.error("FetchReserva error:", err.message || err);
    return [];
  }
};
