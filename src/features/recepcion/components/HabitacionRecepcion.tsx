import {
  Box,
  Typography,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import BuildIcon from "@mui/icons-material/Build";
import { useContext, useState } from "react";
import { RecepcionContext } from "../context/RecepcionContext";
import { supaBase } from "../../../api/supabase/clienst";
import type { Habitacion } from "../types/types";
import ModalHabitacion from "./ModalHabitacion";
import  { Habitacion_Queries } from "../utils/Habitacion_Queries";
import { getBorderColor } from "../utils/getColors";



const HabitacionesRecepcion = () => {

  const [openModal, setOpenModal] = useState(false);
  const [dataHabitaciones, setDataHabitaciones] = useState<any>();
  const {habitaciones:Habitaciones} = useContext(RecepcionContext)




const getIcono = (estado:string)=> {
    switch (estado) {
      case "disponible":
        return <BedIcon fontSize="large" color="success" />;
      case "ocupada":
        return <DoorFrontIcon fontSize="large" color="primary" /> ;
      case "limpieza":
        return  <CleaningServicesIcon fontSize="large" color="warning" />;
      case "mantenimiento":
        return <BuildIcon fontSize="large" color="error" />;
      default:
        return "grey.400";
    }
  };




const handleOpenModal = () => {
    setOpenModal(true);
  };

const handleCloseModal = () => setOpenModal(false);




const getHabitacionDetalle =async(hab:Habitacion)=>{ 


  handleOpenModal()

  const estado = hab.estado as keyof typeof Habitacion_Queries; 
  const querySelect = Habitacion_Queries[estado] ?? Habitacion_Queries['disponible']; 
  const hasReservas = querySelect.includes('reservas'); 

  let query = supaBase 
  .from('habitaciones') 
  .select(querySelect) 
  .eq('id_habitacion', hab.id_habitacion); 

  if (hasReservas) { 
    query = query.in('reservas.estado', ['ocupando', 'pendiente']); 
  } 

  const { data, error } = await query; 

  if (error)
     { console.error('Error al obtener detalle:', error);
       return; 
      }
  else{ 
       setDataHabitaciones(data)
  }
   return data; 
  }



  return (
    <Box
      sx={{
        p: 3,
        width:"100%"
      }}
    >
      <ModalHabitacion open={openModal} handleClose={handleCloseModal} data={dataHabitaciones} />
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, borderBottom: "2px solid #e5e7eb", pb: 1 }}
      >
        Estado de Habitaciones
      </Typography>

      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
          mb: 4,
          p: 2,
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="body2" fontWeight="500" color="text.secondary">
          Leyenda:
        </Typography>
        <Stack direction="row" spacing={2}>
          <Chip
            label="Disponible"
            color="success"
            size="small"
            variant="filled"
          />
          <Chip label="Ocupada" color="primary" size="small" variant="filled" />
          <Chip label="Limpieza" color="warning" size="small" variant="filled" />
          <Chip
            label="Mantenimiento"
            color="error"
            size="small"
            variant="filled"
          />
        </Stack>
      </Paper>

      <Grid container  spacing={2}>
        {Habitaciones?.data?.map((hab) => (
          <Grid key={hab.numero}  size={4} >
            <Paper
              onClick={()=>getHabitacionDetalle(hab)}
              elevation={4}
              sx={{
                  border: `1px solid`,
                borderColor:() => getBorderColor(hab.estado),
                borderRadius: 1,
                transition: "transform 0.2s",
                "&:hover": { transform: "scale(1.03)" },
                cursor: "pointer",
                
              }}
            >
              <Box
                sx={{
                  backgroundColor: () => getBorderColor(hab.estado),
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  py: 0.5,
                  color:"white"
                  
                }}
              >
                {hab.estado}
              </Box>

              <Box sx={{ textAlign: "center", p: 2 }}>
                <Box sx={{ mb: 1 }}>{getIcono(hab.estado)}    </Box>
                <Typography variant="h6" fontWeight="bold">
                  {hab.numero}
                </Typography>
                <Typography variant="body2" >
                  {hab.tipo}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HabitacionesRecepcion;
