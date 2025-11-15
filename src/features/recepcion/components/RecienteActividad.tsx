import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoginIcon from "@mui/icons-material/Login";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

const RecienteActividad = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: "white",
        p: 3,
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <Typography
        variant="h6"
        fontWeight="600"
        color="text.primary"
        sx={{ mb: 2 }}
      >
        Actividad Reciente
      </Typography>

      <List disablePadding>
        <ListItem
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CheckCircleIcon color="secondary" />
            </ListItemIcon>
            <Box>
              <Typography variant="body1" fontWeight="500">
                Reserva Confirmada (#1003)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Habitación Doble - Juan Pérez
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.disabled">
            Hace 5 min
          </Typography>
        </ListItem>
        <Divider />

        <ListItem
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemIcon sx={{ minWidth: 36 }}>
              <LoginIcon sx={{ color: "warning.main" }} />
            </ListItemIcon>
            <Box>
              <Typography variant="body1" fontWeight="500">
                Check-in Realizado
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Habitación 302 - Maria Gómez
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.disabled">
            Hace 30 min
          </Typography>
        </ListItem>
        <Divider />

        <ListItem
          sx={{
            py: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box display="flex" alignItems="center">
            <ListItemIcon sx={{ minWidth: 36 }}>
              <CleaningServicesIcon sx={{ color: "text.secondary" }} />
            </ListItemIcon>
            <Box>
              <Typography variant="body1" fontWeight="500">
                Limpieza Finalizada
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Habitación 105
              </Typography>
            </Box>
          </Box>
          <Typography variant="caption" color="text.disabled">
            Hace 1 hora
          </Typography>
        </ListItem>
      </List>

      <Link
        href="#"
        underline="none"
        sx={{
          mt: 2,
          display: "block",
          textAlign: "center",
          fontWeight: 500,
          color: "primary.main",
          fontSize: "0.9rem",
          "&:hover": { color: "primary.dark" },
          transition: "color 0.2s",
        }}
      >
        Ver todas las actividades
      </Link>
    </Paper>
  );
};

export default RecienteActividad;
