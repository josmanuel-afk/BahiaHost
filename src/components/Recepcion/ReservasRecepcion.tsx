import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ReservasRecepcion = () => {
  const reservas = [
    {
      id: 1003,
      huesped: "Juan Pérez",
      habitacion: "201 (Doble)",
      llegada: "22/10",
      salida: "25/10",
      estado: "Confirmada",
      color: "secondary",
    },
    {
      id: 1004,
      huesped: "Laura Vílchez",
      habitacion: "410 (Suite)",
      llegada: "23/10",
      salida: "27/10",
      estado: "Pendiente",
      color: "warning",
    },
  ];

  return (
    <Box
      sx={{
        p: 3,  
        width:"100%"   }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, borderBottom: "2px solid #e5e7eb", pb: 1 }}
      >
        Gestión de Reservas
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 4}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="600">
            Listado de Reservas
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
          >
            Nueva Reserva
          </Button>
        </Box>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "grey.100" }}>
              <TableRow>
                <TableCell># Reserva</TableCell>
                <TableCell>Huésped</TableCell>
                <TableCell>Hab.</TableCell>
                <TableCell>Llegada</TableCell>
                <TableCell>Salida</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservas.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.huesped}</TableCell>
                  <TableCell>{r.habitacion}</TableCell>
                  <TableCell>{r.llegada}</TableCell>
                  <TableCell>{r.salida}</TableCell>
                  <TableCell>
                    <Chip
                      label={r.estado}
                      variant={r.color === "warning" ? "outlined" : "filled"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body2"
                      color="primary"
                      sx={{ cursor: "pointer", "&:hover": { color: "primary.dark" } }}
                    >
                      Ver
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ReservasRecepcion;
