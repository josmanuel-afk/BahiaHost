import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";

import img_gym from "../../../../assets/img/img-gym.jpg";
import img_gym_2 from "../../../../assets/img/img-gym-2.jpg"; 
import img_gym_3 from "../../../../assets/img/img-gym-3.webp";
import img_gym_4 from "../../../../assets/img/img-gym-4.webp";
import img_gym_5 from "../../../../assets/img/img-gym-5.jpg";
import img_gym_6 from "../../../../assets/img/img_gym_6.jpg";
import img_gym_7 from "../../../../assets/img/img_gym_7.jpg";
import img_gym_8 from "../../../../assets/img/img_gym_8.jpg";
import CustomAppBar from "../../../../layouts/CustomAppBar";
import Collage from "../../components/Collage";
import type { DataGym } from "../../types/typesReservas";
import CardsReservaGym from "./components/CardsReservaGym";
import { UserContext } from "../../../../shared/context/userContext";
import { supaBase } from "../../../../api/supabase/clienst";

const galeria_gym = [
  { src: img_gym, alt: "gym 1" },
  { src: img_gym_2, alt: "gym 2" },
  { src: img_gym_3, alt: "gym 3" },
  { src: img_gym_4, alt: "gym 4" },
  { src: img_gym_5, alt: "gym 5" },
  { src: img_gym_6, alt: "gym 6" },
  { src: img_gym_7, alt: "gym 7" },
  { src: img_gym_8, alt: "gym 8" },
];



function ReservarGym() {


  // const usuariosGym = [
  //   {
  //     nombre: "Carlos",
  //     apellido: "Ramírez",
  //     hora: "10",
  //     fecha: dayjs("2025-10-27"),
  //     cedula: "1023456789",
  //     habitacion: "201",
  //   },
  //   {
  //     nombre: "María",
  //     apellido: "López",
  //     hora: "14",
  //     fecha: dayjs("2025-10-27"),
  //     cedula: "1034567890",
  //     habitacion: "305",
  //   },
  //   {
  //     nombre: "Andrés",
  //     apellido: "García",
  //     hora: "09",
  //     fecha: dayjs("2025-10-27"),
  //     cedula: "1045678901",
  //     habitacion: "110",
  //   },
  //   {
  //     nombre: "Valentina",
  //     apellido: "Torres",
  //     hora: "16",
  //     fecha: dayjs("2025-10-27"),
  //     cedula: "1056789012",
  //     habitacion: "408",
  //   },
  //   {
  //     nombre: "Julián",
  //     apellido: "Pérez",
  //     hora: "12",
  //     fecha: dayjs("2025-10-27"),
  //     cedula: "1067890123",
  //     habitacion: "214",
  //   },
  // ];



  const [dataGym, setDataGym] = useState<DataGym[] | null >(null);

   const { state} = useContext(UserContext);



useEffect(() => {


   if (state.reservas === undefined || state.reservas === null) {
    return 
  }  ;



     const fetchGymReservations = async () => {
        const { data, error } = await supaBase
        .from('reserva_gym')
        .select("id_reserva,fecha,hora,duracion,reservas(id_cliente,habitaciones(numero),clientes(nombre,apellido))")
        if (error) {
          console.log('Error fetching gym reservations:', error.message);
          return;
        }   

         setDataGym(data as unknown as DataGym[]);  


    }    
      fetchGymReservations();

   }, [state.reservas]);







  return (
    <Box
      sx={{
        width: "100%",
        padding: "15px",
        color: "black",
        backgroundColor: "#f1f3f6ff",
      }}
    >
      <CustomAppBar />
      <Box sx={{ width: "97%", marginTop: "65px",opacity: state.reservas? 1 : 0.5,pointerEvents: state.reservas? 'auto':"none" }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ textAlign: "center", marginTop: "15px" }}
        >
          Gimnasio
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "5px",
            marginTop: "45px",
            marginBottom: "85px",
          }}
        >
          <Collage images={galeria_gym} />
        </Box>

        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ textAlign: "center", mb: 5 }}
          >
            Reservacion
          </Typography>

            
           <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box sx={{ width: "500px", height: "550px" }}>
              <Paper sx={{ borde: "red solid 1px", borderRadius: 3 }}>
                <TableContainer
                  component={Paper}
                  sx={{
                    boxShadow: 3,
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <Table>
                    <TableHead
                      sx={{
                        backgroundColor: "#1976D2",
                        "& .MuiTableCell-root": {
                          color: "white",
                          fontWeight: "bold",
                          textAlign: "center",
                        },
                      }}
                    >
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Habitacion</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Hora</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody> 
                        {
                          dataGym? 
                        dataGym?.map((item) => (
                          <TableRow key={item.id_reserva}>
                            <TableCell align="center">{item.reservas.clientes.nombre}</TableCell>
                            <TableCell align="center">{item.reservas.habitaciones.numero || "No asignada"}</TableCell>
                            <TableCell align="center">{item.fecha}</TableCell>
                            <TableCell align="center">{item.hora}</TableCell>
                          </TableRow>
                        )) :  <TableRow>
                                 <TableCell align="center" colSpan={4}>NO HAY DATOS</TableCell>
                              </TableRow>
                      }
                                          
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>

            <CardsReservaGym/>
          </Box>  


        { !state.reservas && (
  <Box
    sx={{
      position: "fixed", 
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
        display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999, 

    }}
  >
    <Typography
      variant="h4"
      sx={{
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        p: 3,
        bgcolor: "primary.main",
        borderRadius: 2,
      }}
    >
      {`${state?.cliente?.nombre}, Necesita hacer una Reserva para desbloquear esta sección`}
    </Typography>
  </Box>
)}
        </Box>
      </Box>
    </Box>
  );
}

export default ReservarGym;







