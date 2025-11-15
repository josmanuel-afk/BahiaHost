import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useForm from "../../../shared/hooks/useForm";
import { supaBase } from "../../../api/supabase/clienst";
import { useContext } from "react";
import { UserContext } from "../../../shared/context/userContext";
import { RecepcionContext } from "../context/RecepcionContext";


interface EditReservasProps {
  handleClose: () => void;
  data:any
}

const EditRerservas = ({ handleClose ,data}: EditReservasProps) => {

const initialState={
  estado:"",
}

const {formData,handleChange} = useForm(initialState)

const {reservas} = useContext(RecepcionContext)

const UpdatEstado = async()=>{


  console.log(data,"pp")

  const { error } = await supaBase
  .from('reservas')
  .update({ estado: formData.estado })
  .eq('id_reserva', data.id)

  if(error){
    console.log("error",error)
    throw new Error(error.message)
    
  }else{
      await reservas.refresh() 
    handleClose()
  }
}


  return (
    <Box
      sx={{
        position: "absolute" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        width: "95%",
        maxWidth: 600,
        maxHeight: "90vh",
      }}
    >
     
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            pb={2}
            borderBottom="1px solid"
            borderColor="divider"
            mb={3}
          >
            <Typography variant="h5" fontWeight="bold">
              Editar Reserva #{data.id}
            </Typography>
            <Button color="inherit">✕</Button>
          </Stack>

          <form>
        <Typography
          variant="body2"
          fontWeight="bold"
          color="white"
          bgcolor="green"
          px={2}
          py={1}
          borderRadius={2}
          mb={3}
          display="inline-block"
        >
          Estatus Actual: {data.estado}
        </Typography>

        {/* Campos */}
        <Stack spacing={3}>
          <TextField
            label="Huésped"
            name="huesped"
            value={data.nombre}
            fullWidth
            disabled
          />
          <TextField
            label="Habitación"
            name="habitacion"
            value={data.habitacion}
            fullWidth
            disabled
          />

          <Stack direction="row" spacing={2}>
            <TextField
              label="Llegada"
              name="llegada"
              type="date"
              value={data.checkIn}
              fullWidth
              InputLabelProps={{ shrink: true }}
              disabled
            />
            <TextField
              label="Salida"
              name="salida"
              type="date"
              value={data.checkOut}
              fullWidth
              InputLabelProps={{ shrink: true }}
              disabled
            />
          </Stack>

          <FormControl fullWidth>
            <InputLabel>Cambiar Estado</InputLabel>
            <Select name="estado" value={formData.estado} label="Cambiar Estado" onChange={handleChange}>
              <MenuItem value="ocupando">Ocupando</MenuItem>
              <MenuItem value="pendiente">Pendiente</MenuItem>
              <MenuItem value="finalizada">Finalizada</MenuItem>
              <MenuItem value="cancelada">Cancelada</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Divider sx={{ my: 3 }} />

        {/* Botones */}
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
          >
            cerrrar
          </Button>
          <Button variant="contained" color="primary" onClick={UpdatEstado} >
            Actualizar
          </Button>
        </Stack>
      </form>
        
      
    </Box>
  );
};

export default EditRerservas;
