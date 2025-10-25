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



const HabitacionesRecepcion = () => {

  const habitaciones = [
    {
      numero: "201",
      tipo: "Doble | 2 Pax",
      estado: "Disponible",
      color: "success",
      icono: <BedIcon fontSize="large" color="success" />,
    },
    {
      numero: "302",
      tipo: "Suite | Check-out 22/10",
      estado: "Ocupada",
      color: "primary",
      icono: <DoorFrontIcon fontSize="large" color="primary" />,
    },
    {
      numero: "105",
      tipo: "Económica | Pendiente",
      estado: "Limpieza",
      color: "warning",
      icono: <CleaningServicesIcon fontSize="large" color="warning" />,
    },
    {
      numero: "205",
      tipo: "Doble | 2 Pax",
      estado: "Disponible",
      color: "success",
      icono: <BedIcon fontSize="large" color="success" />,
    },
    {
      numero: "401",
      tipo: "Doble | Check-out 25/10",
      estado: "Ocupada",
      color: "primary",
      icono: <DoorFrontIcon fontSize="large" color="primary" />,
    },
    {
      numero: "305",
      tipo: "Suite | Pendiente",
      estado: "Mantenimiento",
      color: "error",
      icono: <BuildIcon fontSize="large" color="error" />,
    },
  ];

   const getBorderColor = (estado:string):string=> {
    switch (estado) {
      case "Disponible":
        return "#10B981";
      case "Ocupada":
        return "#4F46E5";
      case "Limpieza":
        return "#ED6C02 ";
      case "Mantenimiento":
        return "red";
      default:
        return "grey.400";
    }
  };



  return (
    <Box
      sx={{
        p: 3,
        width:"100%"
      }}
    >
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
        {habitaciones.map((hab) => (
          <Grid key={hab.numero}  size={4}>
            <Paper
              elevation={4}
              sx={{
                border: `2px solid`,
                borderColor:() => getBorderColor(hab.estado),
                borderRadius: 3,
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
                <Box sx={{ mb: 1 }}>{hab.icono}</Box>
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
