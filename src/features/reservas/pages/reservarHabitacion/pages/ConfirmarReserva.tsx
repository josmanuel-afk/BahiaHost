import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CustomAppBar from "../../../../../layouts/CustomAppBar";
import DialogConfirmacion from "../components/DialogConfirmacion";
import CardMetodoPago from "../components/CardMetodoPago";
import ConfirmCheckbox from "../components/ConfirmCheckbox";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../../shared/context/userContext";
import { formatearFechas } from "../utils/formatearFechas";
import { totalReserva } from "../utils/totalReserva";
import { supaBase } from "../../../../../api/supabase/clienst";
import dayjs from "dayjs";

export default function ConfirmarReserva() {
  const [open, setOpen] = useState(false);
  const  {state} = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state || {};

  const [textoFechas, setTextoFechas] = useState({
    fecha:"",
    dias:"",
    noches: 0 
  });
  

 
 

  useEffect(() => {
    if (!data || Object.keys(data).length === 0) {
  navigate("/reservar");
} 
  }, [data, navigate]);


if (!data ||Object.keys(data).length === 0   ){
    return (
        <Typography variant="h2" sx={{height:"100vh",display:"flex",justifyContent:"center",
          alignItems:"center"}} >
           Cargando...</Typography>
      )
  }  ;


 const handleSubmit = async() => {

  const entrada = new Date(data.formData.entrada.$d); 
  const salida =new Date(data.formData.salida.$d);

  const reserva = {
    id_cliente: state?.cliente?.id_cliente,
    id_habitacion: data.item.id_habitacion,
    fecha_reserva : new Date().toISOString(),
    fecha_check_in: entrada.toISOString(),
    fecha_check_out: salida.toISOString()    ,
    estado:"pendiente",
    total:totalReserva(data.item.categorias_habitacion.precio,textoFechas.noches),
  }


    const { error } = await supaBase
    .from('reservas')
    .insert(reserva)     
    
    
  
      if(error){
        throw new Error(error.message)
      }         

    setOpen(true);
  };


useEffect(() => {
    const { entrada, salida } = data.formData || {};
    const {textoFechas,textoNoches,noches} = formatearFechas(entrada, salida);

      setTextoFechas((item)=>({
        ...item,
        fecha:textoFechas,
        dias:textoNoches,
        noches:noches?? 0 ,
      }
     ))

  }, [data.formData]);



  

  return (
    <Box>
      <CustomAppBar />
      <Box sx={{ mt: 10 }}>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Finalizar Reserva
          </Typography>
          <Typography variant="body2" color="primary.light">
            Confirmación y Pago en Físico
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            p: { xs: 3, md: 5 },
          }}
        >
          <Box flex={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              mb={2}
              borderBottom={2}
              borderColor="primary.light"
              pb={1}
            >
              <HomeIcon sx={{ mr: 1, color: "primary.main" }} />
              Resumen de tu Estancia
            </Typography>

            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: "grey.50",
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  Habitación {data.item.categorias_habitacion.nombre}
                </Typography>

                <Box mt={3}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="medium"
                    >
                      Fechas:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary.dark"
                    >
                      {textoFechas.fecha}
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="medium"
                    >
                      Huéspedes:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary.dark"
                    >
                      {data.item.categorias_habitacion.capacidad} Adultos
                    </Typography>
                  </Box>

                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      fontWeight="medium"
                    >
                      Noches:
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="primary.dark"
                    >
                      {textoFechas.dias}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    Total de la Reserva:
                  </Typography>
                  <Typography
                    variant="h5"
                    color="success.main"
                    fontWeight="bold"
                  >
                     {totalReserva(data.item.categorias_habitacion.precio,textoFechas.noches)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            <CardMetodoPago />
          </Box>

          <Box flex={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              mb={2}
              borderBottom={2}
              borderColor="primary.light"
              pb={1}
            >
              <PersonIcon sx={{ mr: 1, color: "primary.main" }} />
              Datos del Huésped Confirmados
            </Typography>

              <Card
                sx={{
                  p: 3,
                  bgcolor: "primary.light",
                  border: "1px solid",
                  borderColor: "primary.main",
                  borderRadius: 3,
                  mb: 3,
                }}
              >
                <Box mb={1}>
                  <Typography
                    variant="caption"
                    color="#ffff"
                    fontWeight="medium"
                  >
                    Nombre Completo
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {state?.cliente?.nombre}   {state?.cliente?.apellido} 
                  </Typography>
                </Box>

                <Box mb={1}>
                  <Typography
                    variant="caption"
                     color="#ffff"
                    fontWeight="medium"
                  >
                    Correo Electrónico
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {state?.cliente?.email}
                  </Typography>
                </Box>

                <Box mb={1}>
                  <Typography
                    variant="caption"
                     color="#ffff"
                    fontWeight="medium"
                  >
                    Teléfono
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    +57 {state?.cliente?.telefono}
                  </Typography>
                </Box>
              </Card>

              <ConfirmCheckbox />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.2s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={handleSubmit}
              >
                Confirmar Reserva (Pago al Llegar)
              </Button>
          </Box>
        </Box>
      </Box>

      <DialogConfirmacion open={open} setOpen={setOpen} />
    </Box>
  );
}
