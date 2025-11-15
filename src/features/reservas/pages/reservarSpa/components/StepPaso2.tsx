import { Box, Typography } from "@mui/material";
import PopoverCustom from "../../../../../shared/hooks/PopoverCustom";
import type { Dayjs } from "dayjs";
import { useState } from "react";

  const StepPaso2 = ({setForm}:any)=>{


 const cita = [
    {
      tipo: "Masaje Ejecutivo",
      tiempo: "30 minutos",
      precio: "$ 60.000.000",
    },
    {
      tipo: "Masaje Indivudual",
      tiempo: "1 hora",
      precio: "$ 95.000.000",
    },
    {
      tipo: "Masaje en Pareja",
      tiempo: "1 hora",
      precio: "$ 190.000.000",
    },
    {
      tipo: "Hidratacion Facial",
      tiempo: "40 minutos",
      precio: "$ 75.000.000",
    },
    {
      tipo: "Limpieza Facial Profunda",
      tiempo: "1 hora",
      precio: "$ 95.000.000",
    },
    {
      tipo: "Depilacion",
      tiempo: "10 minutos",
      precio: "$ 3.000.000",
    },
  ];
 
const [horarios, setHorarios] = useState<(Dayjs | null )[]>(Array(cita.length).fill(null));


 
  const handleSetHorario = (index: number, value: Dayjs ) => {
    setHorarios((prev) =>
      prev.map((_, i) => (i === index ? value : null))
    );

    
    setForm((prev: any) => ({
    ...prev,
    fechaReserva: value,
  }));
  };
  


const handleClickCard = (card:any) => {

const {tipo,precio,tiempo} =  card

  setForm((prev: any) => ({
    ...prev,
    tipo,
    precio,
    tiempo

  }));  };



     return (
    <Box sx={{ width: "650px", height: "450px",overflow:"scroll",overflowX: "hidden", }}>
      <Box sx={{ width: "100%", margin: "0px auto" }}>
        <Typography variant="h5">Elegir tu cita</Typography>
        {cita.map((item, index) => (
          <Box
            sx={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "75px",
              padding: "15px",
              marginBottom: "12px",
            }}
            key={index}
          >
            <Box>
              <Typography>{item.tipo}</Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Typography>{item.tiempo}</Typography>
                <Typography>{item.precio}</Typography>
              </Box>
            </Box>
            <PopoverCustom  value={horarios[index]}  onClick={() => handleClickCard(item)}
            onChange={(value:any) => handleSetHorario(index, value)} label='Seleccionar Horario'/>
          </Box>
        ))}
      </Box>
    </Box>
  );

  } 
  
   
 
  export default StepPaso2