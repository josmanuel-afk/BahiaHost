import { useContext } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import useForm from "../../../../../shared/hooks/useForm";
import { UserContext } from "../../../../../shared/context/userContext";
import { supaBase } from "../../../../../api/supabase/clienst";
import SimpleSnackbar from "./Snackbar";





export default function CardsReservaGym() {


  const Initialfechas = {
    fecha:"",
    hora:"",
    duracion:""
  }
  
  const {formData,handleChange,resetForm} = useForm(Initialfechas)
  const startHours = Array.from({ length: 7 }, (_, i) => `${9 + i}:00`);
  const endHours = Array.from({ length: 5}, (_, i) => `${1 + i}`);

const {state} = useContext(UserContext) 


const ReservarGym = async () => { 

  const {duracion,fecha,hora} = formData

   const reservarGym =  {
    id_reserva: state?.reservas?.id_reserva,
    fecha: fecha,
    hora: hora,
    duracion: duracion,
   }

   const { error } = await supaBase
  .from('reserva_gym')
  .insert(reservarGym)

if (error) {
  console.log('Error al reservar el gym:', error.message);    
}  


resetForm()

} 


  return (
    <Card
      sx={{
        Width: 470,
        height:550,
        p: 3,   
        borderRadius: 4,
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          Reserva de servicio  Gym
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Selecciona el horario deseado.
        </Typography>

        <Box
          sx={{
            background: "#EEF2FF",
            p: 2,
            mb: 3,
            borderRadius: 2,
          }}
        >
          <Box display="flex" justifyContent="space-between">
            <Typography fontSize={14} color="text.secondary">
              Huésped:
            </Typography>
                        <Typography fontWeight="bold"> 
                           {state?.cliente
                            ? `${state.cliente.nombre} ${state.cliente.apellido}`
                            : "No asignada"} 
                </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mt={1}>
            <Typography fontSize={14} color="text.secondary">
              Habitación:
            </Typography>
            <Typography
              fontWeight="bold"
              sx={{
                background: "#C7D2FE",
                px: 2,
                py: 0.5,
                borderRadius: "999px",
              }}
            >
             {state?.reservas?.habitaciones?.numero || "No asignada"}
            </Typography>
          </Box>
        </Box>

        <Typography fontWeight="bold" mb={2}>
          Seleccionar Horario
        </Typography>


        <Box mb={3}>

                <TextField
                fullWidth
                label="Fecha"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                type="date"
                InputLabelProps={{ shrink: true }}
                />

            </Box>

        <Box display="flex" gap={2}>

          <FormControl fullWidth>
            <InputLabel>Inicio</InputLabel>
            <Select
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              label="hora"
            >
              {startHours.map((h) => (
                <MenuItem key={h} value={h}>
                  {h}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>duracion</InputLabel>
            <Select
              name="duracion"
              value={formData.duracion}
              onChange={handleChange}
              label="duracion"
            >
              {endHours.map((h) => (
                <MenuItem key={h} value={h}>
                  {h}H
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
       <SimpleSnackbar  onClick={ReservarGym}/>
      </CardContent>
    </Card>
  );
}
