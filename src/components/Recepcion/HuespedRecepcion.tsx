import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Person } from "@mui/icons-material";

function HuespedRecepcion() {


  const items = [
    {
      nombre: "Maria Gómez",
      detalle: "Habitación 302 | Check-in: Hoy",
      estado: "Activo",
    },
    {
      nombre: "Pedro Ramírez",
      detalle: "Habitación 401 | Check-out: 25/10",
      estado: "Activo",
    },
    {
      nombre: "Elena Castro",
      detalle: "Historial | Última visita: 1 semana",
      estado: "Inactivo",
    },
  ];

  return (
    <Box sx={{p: 3, width: "100%" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="text.primary"
        mb={3}
        sx={{ borderBottom: "1px solid #e0e0e0", pb: 1 }}
      >
        Huéspedes
      </Typography>

      <Box
        sx={{ backgroundColor: "white", p: 4, borderRadius: 3, boxShadow: 3 }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}  
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="h6" fontWeight="600">
            Huéspedes Activos
          </Typography>
          <TextField
            size="small"
            placeholder="Buscar huésped..."
            sx={{ width: { xs: "100%", sm: "250px" } }}
          />
        </Box>

        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                borderBottom: "1px solid #f0f0f0",
                py: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "grey.200", mr: 2 }}>
                  <Person sx={{ color: "grey.600" }} />
                </Avatar>
                <ListItemText
                  primary={
                    <Typography fontWeight="medium" color="text.primary">
                      {item.nombre}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {item.detalle}
                    </Typography>
                  }
                />
              </Box>

              <Typography
                variant="body2"
                fontWeight="600"
                color={
                  item.estado === "Activo" ? "primary.main" : "text.disabled"
                }
              >
                {item.estado}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default HuespedRecepcion;
