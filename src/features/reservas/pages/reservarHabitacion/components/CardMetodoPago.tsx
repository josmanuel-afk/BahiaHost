import { Card, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const CardMetodoPago = () => {
  return (
    <Card
      sx={{
        mt: 3,
        p: 3,
        borderLeft: 6,
        borderColor: "#854D0E",
        bgcolor: "#FEF9C3",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="#854D0E"
        display="flex"
        alignItems="center"
        mb={1}
      >
        <InfoIcon sx={{ mr: 1 }} />
        Importante: Método de Pago
      </Typography>
      <Typography variant="body2" color="#854D0E">
        El pago total de la reserva se realizará en físico (efectivo o tarjeta)
        directamente al llegar a la propiedad. Solo se requiere esta
        confirmación para garantizar su espacio.
      </Typography>
    </Card>
  );
};

export default CardMetodoPago;
