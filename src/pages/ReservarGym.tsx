import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import img_gym from "../img/img-gym.jpg";
import img_gym_2 from "../img/img-gym-2.jpg";
import img_gym_3 from "../img/img-gym-3.webp";
import img_gym_4 from "../img/img-gym-4.webp";
import img_gym_5 from "../img/img-gym-5.jpg";
import CustomAppBar from "../components/CustomAppBar ";

const galeria_gym = [img_gym, img_gym_2, img_gym_3, img_gym_4, img_gym_5];

interface DataGym {
  nombre: string;
  apellido: string;
  hora: string;
  fecha: string;
  cedula: string;
  habitacion: string;
}

function ReservarGym() {
  const usuariosGym = [
    {
      nombre: "Carlos",
      apellido: "Ramírez",
      hora: "10",
      fecha: "2025-10-25",
      cedula: "1023456789",
      habitacion: "201",
    },
    {
      nombre: "María",
      apellido: "López",
      hora: "14",
      fecha: "2025-10-25",
      cedula: "1034567890",
      habitacion: "305",
    },
    {
      nombre: "Andrés",
      apellido: "García",
      hora: "09",
      fecha: "2025-10-26",
      cedula: "1045678901",
      habitacion: "110",
    },
    {
      nombre: "Valentina",
      apellido: "Torres",
      hora: "16",
      fecha: "2025-10-26",
      cedula: "1056789012",
      habitacion: "408",
    },
    {
      nombre: "Julián",
      apellido: "Pérez",
      hora: "12",
      fecha: "2025-10-27",
      cedula: "1067890123",
      habitacion: "214",
    },
  ];

  const [gymInfo, setGymInfo] = useState({
    nombre: " ",
    apellido: " ",
    hora: " ",
    fecha: " ",
    cedula: " ",
    habitacion: " ",
  });

  const [dataGym, setDataGym] = useState<DataGym[]>([]);

  useEffect(() => {
    setDataGym(usuariosGym);
  }, []);

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
      <Box sx={{ width: "97%", marginTop: "65px" }}>
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
            marginBottom: "45px",
          }}
        >
          {galeria_gym.map((item) => (
            <img
              src={item}
              style={{ width: "", height: "300px", borderRadius: "20px" }}
            />
          ))}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ width: "500px", height: "550px" }}>
            <Paper sx={{ borde: "red solid 1px",borderRadius: 3, }}>
              <TableContainer  component={Paper}
                    sx={{
                      boxShadow: 3,
                      borderRadius: 3,
                      overflow: "hidden",
                    }}>
                   <Table>
                <TableHead sx={{ backgroundColor: "#101158ff","& .MuiTableCell-root": {
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }, }}>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Habitacion</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataGym.length > 0 ? (
                    dataGym.map((data, index) => (
                      <TableRow sx={{
                "&:nth-of-type(odd)": {
                  backgroundColor: "rgba(0,0,0,0.03)",
                },
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.2)",
                },
              }} key={index}>
                        <TableCell align="center">{data.nombre}</TableCell>
                        <TableCell align="center">{data.habitacion}</TableCell>
                        <TableCell align="center">{data.fecha}</TableCell>
                        <TableCell align="center">{data.hora}:00</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell>NO hay datos</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
                
              </TableContainer>
            
            </Paper>
          </Box>
          <Paper sx={{
              width: "450px",
              height: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              padding: "22px",
              borderRadius: "15px",
              background: "#fff",
              boxShadow: 3
            }}>
            <Typography fontWeight="bold" variant="h3" sx={{ marginBottom: "5px" }}>
              Reserva Gym
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "50%",
                  flexDirection: "column",
                   gap:"15px"
                }}
              >
                <label>Nombre</label>
                <TextField
                  value={gymInfo.nombre}
                  variant="filled"
                  sx={{ borderRadius: "5px" }}
                  fullWidth
                  name="nombre"
                  type="text"
                  label="nombre"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "50%",
                  flexDirection: "column",
                   gap:"15px"
                }}
              >
                <label>Apellido</label>
                <TextField
                  value={gymInfo.apellido}
                  variant="filled"
                  fullWidth
                  name="apellido"
                  type="text"
                  label="apellido"
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "50%",
                  flexDirection: "column",
                  gap:"15px"
                }}
              >
                <label>Cedula</label>
                <TextField
                  value={gymInfo.cedula}
                  variant="filled"
                  sx={{ borderRadius: "5px" }}
                  fullWidth
                  name="cedula"
                  type="text"
                  label="cedula"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "50%",
                  flexDirection: "column",
                   gap:"15px"
                }}
              >
                <label>Habitacion</label>
                <TextField
                  value={gymInfo.habitacion}
                  variant="filled"
                  sx={{ borderRadius: "5px" }}
                  fullWidth
                  name="habitacion"
                  type="text"
                  label="habitacion"
                />
              </Box>
            </Box>

            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                position: "relative",
                background: "#101158ff",
                border: "1px solid black",
              }}
            >
              Inscribirse
            </Button>
          
            
          </Paper>
        



        </Box>
      </Box>
    </Box>
  );
}

export default ReservarGym;
