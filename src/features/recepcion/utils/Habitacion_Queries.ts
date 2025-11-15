  export const Habitacion_Queries = {
    ocupada: `
      id_habitacion,
      numero,
      estado,
      reservas (
        id_reserva,
        clientes (
          id_cliente,
          nombre,
          apellido,
          email
        )
      ) 
    `,
    limpieza: `
      id_habitacion,
      numero,
      estado,
     habitacion_personal(
     estado,
     tipo_tarea,
      observaciones,
      personal (
          nombre, 
          apellido,
          cargo
        )
      )    
    `,
     mantenimiento: `
      id_habitacion,
      numero,
      estado,
     habitacion_personal(
     estado,
     tipo_tarea,
      observaciones,
      personal (
          nombre, 
          apellido,
          cargo
        )
      )
  `
    ,
    disponible: `
      id_habitacion,
      numero,
      estado
    `
  };
