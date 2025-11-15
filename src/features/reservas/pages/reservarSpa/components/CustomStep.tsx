import { Box, Button, Step, StepLabel, Stepper, StepContent, Typography } from "@mui/material";
import { useContext, useState } from "react";
import StepPaso1 from "./StepPaso1";
import StepPaso2 from "./StepPaso2";
import StepPaso3 from "./StepPaso3";
import useForm from "../../../../../shared/hooks/useForm";
import { UserContext } from "../../../../../shared/context/userContext";
import { supaBase } from "../../../../../api/supabase/clienst";

const CustomStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Datos personales", "Detalles de reserva", "Confirmación"];

  const { formData, handleChange, setForm } = useForm({
    tipo: "",
    tiempo: "",
    precio: "",
    fechaReserva: null,
  });


  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const pasos = [StepPaso1, StepPaso2, StepPaso3];



  const { state } = useContext(UserContext);




const ReservarSpa= async()=>{ 

  const { tipo, tiempo, precio, fechaReserva } = formData;
   
   
   const precioInt = parseInt(precio.replace(/[$. ]/g, ""), 10);

  const reservaDetails = {
    id_reserva: state?.reservas?.id_reserva,
    tipo: tipo,
    duracion: tiempo,
    precio: precioInt,
    fecha:fechaReserva,
  };

  const { error } = await supaBase
  .from('reserva_spa')
  .insert([reservaDetails]);

  if (error) {
    console.error('Error al crear la reserva:', error);
    return;
  }
 console.log("Formulario completado:", formData);

}


  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const PasoActual = pasos[index];
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Box sx={{ mt: 2 }}>
                  <PasoActual
                    formData={formData}
                    setForm={setForm}
                    handleChange={handleChange}
                  />
                </Box>

                <Box sx={{ mt: 3 ,textAlign:"center"}}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Atrás
                  </Button>
                  <Button
                    variant="contained"
                    onClick={(()=>{
                      if(activeStep === steps.length -1){
                        ReservarSpa()
                      } 
                        handleNext()
                      
                    })}
                  >
                    {activeStep === steps.length - 1
                      ? "Finalizar"
                      : "Siguiente"}
                  </Button>
                </Box>

              </StepContent>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length && (
        <Box sx={{ textAlign: "center", mt: 3, color: "green" }}>
          <Typography>¡Formulario completado!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CustomStep;
