import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import useForm from "../../../shared/hooks/useForm";
import { useContext, useEffect } from "react";
import { RecepcionContext } from "../context/RecepcionContext";
import { supaBase } from "../../../api/supabase/clienst";



export  interface ModalReservaProps {
handleClose: ()=>void
}



export default function NuevaReservas({handleClose}:ModalReservaProps) {
  
    const InitialStateNuevaReserva = {
      id_cliente: "",
      id_categoria: "",
      fecha_reserva: new Date().toISOString(),
      fecha_check_in: "",
      fecha_check_out: "",
      estado: "",
      total: 0,
  }

const {formData,handleChange} = useForm(InitialStateNuevaReserva)

  const {clientes,habitaciones,reservas,categoria_Habitacion} = useContext(RecepcionContext)


const handleSubmit =  async() => {


     const habitacion = habitaciones?.data?.find((item)=>item.id_categoria === formData.id_categoria)

     const data = {
      id_cliente: formData.id_cliente,
      id_habitacion: habitacion.id_habitacion,
      fecha_reserva: new Date().toISOString(),
      fecha_check_in: formData.fecha_check_in,
      fecha_check_out: formData.fecha_reserva,
      estado: formData.estado,
      total: formData.total,
     }

    

  const { error } = await supaBase
  .from('reservas')
  .insert(data)

  if(error){
    console.log("error",error)
  }
     await reservas.refresh() 
    handleClose();  



  };
  





  return (

      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          width: "90%",
          maxWidth: 700,
          p: 4,
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Crear Nueva Reserva
        </Typography>

        <Box component="form" >
          <Grid container spacing={2} mb={2}>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel>Cliente</InputLabel>
                <Select
                  name="id_cliente"
                  value={formData.id_cliente}
                  label="Cliente"
                  required
                onChange={handleChange}

                >
                  <MenuItem value="">Selecciona un cliente</MenuItem>
                  {clientes?.data?.map((item:any)=>(
  
                       <MenuItem value={item.id_cliente}>{item.nombre} {item.apellido}</MenuItem>
                    
                  ))}
                  
                </Select>

              </FormControl>
            </Grid>

            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel>Habitación</InputLabel>
                <Select
                  name="id_categoria"
                  value={formData.id_categoria}
                  label="Habitación"
                  required
                  onChange={handleChange}

                >
                  <MenuItem value="">Selecciona una habitación</MenuItem>
                  { 
                    categoria_Habitacion?.data?.map((item:any)=>(
                        <MenuItem value={item.id_categoria}>{item.nombre}</MenuItem>

                    ))
                  }
                </Select>
              
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={2}>
              <Grid size={6}>
                <TextField
                  fullWidth
                  type="date"
                  label="Fecha Check-in"
                  name="fecha_check_in"
                  slotProps={{
                  inputLabel: { shrink: true },
                  }}
                  value={formData.fecha_check_in}
                  required
                  onChange={handleChange}

                />
            </Grid>

            <Grid size={6}>
              <TextField
                fullWidth
                type="date"
                label="Fecha Check-out"
                name="fecha_check_out"
                slotProps={{
                 inputLabel: { shrink: true },
               }}                
               value={formData.fecha_check_out}
                required
                onChange={handleChange}

              />
            </Grid>
          </Grid>

          <Grid container spacing={2} mb={3}>
            <Grid size={6}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
                <Select
                  name="estado"
                  value={formData.estado}
                  label="Estado"
                  required
                  onChange={handleChange}

                >
                  <MenuItem value="pendiente">Pendiente</MenuItem>
                  <MenuItem value="ocupando">ocupando</MenuItem>
                  <MenuItem value="cancelada">Cancelada</MenuItem>
                  <MenuItem value="finalizada">Finalizada</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={6}>
              <TextField
                fullWidth
                label="Monto Total (Decimal)"
                name="total"
                type="number"
                placeholder="Ej: 150.50"
                value={formData.total}
                required
                onChange={handleChange}

              />
            </Grid>
          </Grid>

          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" color="inherit" onClick={handleClose} >
              Cancelar
            </Button>
            <Button variant="contained" color="success"  onClick={handleSubmit} >
              Guardar Reserva
            </Button>
          </Box>
        </Box>
      </Box>
  );
}
