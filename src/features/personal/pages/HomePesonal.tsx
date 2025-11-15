import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";

import AppBarPersonal from "../components/appBarPersonal"
import ModalPersonal from "../components/ModalPersonal";
import { supaBase } from "../../../api/supabase/clienst";
import { UserContext } from "../../../shared/context/userContext";
import type { HabitacionPersonalProp } from "../types/typesPesonal";



 function HomePesonal() {
  const [perosonalHabitacion, setPerosonalHabitacion] = useState<HabitacionPersonalProp[]>([]);
  const [detallesPesorsonalHabitacion, setdetallesPesorsonalHabitacion] = useState<HabitacionPersonalProp | null >(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);





 
   const {state} = useContext(UserContext)


  useEffect(()=>{

    const FechtHabitaciones_personal = async ()=>{
     const {data,error}= await supaBase
     .from("habitacion_personal")
     .select("*,habitaciones(*),personal(nombre,apellido)")
     .eq("id_personal",state.personal?.id_personal)
     .eq("estado", "activo")  
     if(error){
        throw new Error(error.message)
     }

      setPerosonalHabitacion(data)
     
     

    }
   
    
FechtHabitaciones_personal()
  

  },[])



  const ModalOpen = (hab:any) => {
    setModalOpen(true)
    setdetallesPesorsonalHabitacion(hab)
  };

console.log(perosonalHabitacion,"ppp")
  return (
    <Box sx={{ minHeight: "100vh", p: { xs: 2, sm: 4 }}}>
        <AppBarPersonal personal={perosonalHabitacion[0]?.personal?.nombre}/>
      <Box mb={4} p={2} bgcolor="#58a4e3ff" boxShadow={3} borderRadius={3} color={"white"} >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Panel de Servicio y Limpieza
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gestión del estado de las habitaciones  del Hotel Bahi Host
        </Typography>
      </Box>
      <Divider/>

      <Box mt={3} mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Listado de Habitaciones
        </Typography>
      </Box>



        <Grid container spacing={3} >
          {
          perosonalHabitacion.length > 0 ?
          perosonalHabitacion?.map((hab) => (
            <> 
                <Grid  size={4} key={hab.id_personal} sx={{cursor:"pointer"}} onClick={()=>ModalOpen(hab)}>
                  <Card sx={{border:"2px solid orange"}}>
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        Habitación {hab?.habitaciones?.numero}
                      </Typography>
                      <Typography>estado: {hab.estado}</Typography>

                    <Typography>Tipo de area: {hab.tipo_tarea}</Typography>
                    <Typography>Observaciones: {hab.observaciones}</Typography>
                    
                    </CardContent>
                  </Card>
                </Grid>
            
                    <ModalPersonal modalOpen={modalOpen} setModalOpen={setModalOpen} hab={detallesPesorsonalHabitacion} />

            </>
           

          )):
           <Typography>tienes el dia libre</Typography>
          
          }
        </Grid>
  
    </Box>
  );
}

export default HomePesonal
