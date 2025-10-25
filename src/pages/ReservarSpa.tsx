import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import img_spa from "../img/img-spa.jpg";
import img_spa_2 from "../img/img-spa-2.jpg";
import img_spa_3 from "../img/img-spa-3.webp";
import img_spa_4 from "../img/img-spa-4.jpg";
import img_spa_5 from "../img/img-spa-5.jpg";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomAppBar from "../components/CustomAppBar ";

const galeria_spa = [img_spa, img_spa_2, img_spa_3, img_spa_4, img_spa_5];

function ReservarSpa() {
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

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Datos personales", "Detalles de reserva", "Confirmación"];

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const [data, setData] = useState({
    nombre: "",
    apellido: " ",
    cedula: " ",
    telefono: " ",
    habitacion: "",
    tipo: " ",
    tiempo: " ",
    precio: " ",
    fecha: " ",
    hora: " ",
    dia: "",
  });

  const Paso1Datos = (
    <Paper sx={{ width: "40%", margin: "0px auto", padding: "25px" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textAlign: "center", mb: "25px" }}
      >
        Tus Datos
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: "45px",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography sx={{ mb: "12px" }}>Nombre*</Typography>
          <TextField
            value={data.nombre}
            variant="filled"
            type="text"
            id="nombre"
            name="nombre"
            label="nombre"
          />
        </Box>
        <Box>
          <Typography sx={{ mb: "12px" }}>Apellido*</Typography>
          <TextField
            value={data.apellido}
            type="text"
            variant="filled"
            id="apellido"
            label="apellido"
            name="apellido"
          />
        </Box>

        <Box>
          <Typography sx={{ mb: "12px" }}>Cedula*</Typography>
          <TextField
            value={data.cedula}
            type="text"
            variant="filled"
            id="cedula"
            label="cedula"
            name="cedula"
          />
        </Box>
        <Box>
          <Typography sx={{ mb: "12px" }}>Telefono*</Typography>
          <TextField
            value={data.telefono}
            name="telefono"
            type="text"
            variant="filled"
            id="telefono"
            label="telefono"
          />
        </Box>
        <Box>
          <Typography sx={{ mb: "12px" }}>Habitacion*</Typography>
          <TextField
            value={data.habitacion}
            name="habitacion"
            type="text"
            variant="filled"
            id="habitacion"
            label="habitacion"
          />
        </Box>
      </Box>
    </Paper>
  );

  const Paso2ElegirCita = (
    <Box sx={{ width: "100%", height: "480px",overflow:"scroll",overflowX: "hidden" }}>
      <Box sx={{ width: "850px", margin: "0px auto" }}>
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

            <Button variant="contained">Seleccionar</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const Paso3Finalizar = (
    <Box
      sx={{
        width: "250px",
        height: "200px",
        color: "green",
        margin: "0px auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>Finalizado el registro del spa</Typography>
    </Box>
  );

  const pasos = [Paso1Datos, Paso2ElegirCita, Paso3Finalizar];
  return (
    <Box
      sx={{ color: "black", paddingBottom: "145px", background: "#f1f3f6ff" }}
    >
      <CustomAppBar />
      <Box>
        <Typography
          variant="h1"
          sx={{ textAlign: "center", marginTop: "75px" }}
        >
          Spa
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
          {galeria_spa.map((item) => (
            <img
              src={item}
              style={{ width: "", height: "300px", borderRadius: "20px" }}
            />
          ))}
        </Box>

        <Box sx={{ width: "100%" , marginTop:"85px"}}>
          <Typography variant="h3" fontWeight="bold" sx={{textAlign:"center",mb:"55px"}}>Reserva</Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 3 }}>
            {activeStep === steps.length ? (
              <Box sx={{textAlign:"center",height:"175px",display:"flex",justifyContent:"center",alignItems:"center",color:"green"}}> 
                <Typography>¡Formulario completado!</Typography>
             </Box>
            ) : (
              <Box sx={{ width: "100%" }}>
                <Box>{pasos[activeStep]}</Box>

                <Box sx={{ mt: 5, textAlign: "center" }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ margin: "12px" }}
                  >
                    Atrás
                  </Button>
                  <Button variant="contained" onClick={handleNext}>
                    {activeStep === steps.length - 1
                      ? "Finalizar"
                      : "Siguiente"}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReservarSpa;
