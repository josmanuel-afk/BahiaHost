import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const StepPaso3 = ({formData={}}:any) => {




console.log(formData,"formData")

  return (
     <Card
      sx={{
        maxWidth: 320,
        width: "100%",
        mx: "auto",
        borderRadius: 2,
        boxShadow: 4,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "success.light",
          color: "white",
          p: 2,
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 40, color: "success.main", mb: 0.5 }} />
        <Typography variant="h6" fontWeight="bold">
          ¡Reserva Completada!
        </Typography>
        <Typography variant="caption" color="white">
          Tu cita ha sido agendada correctamente
        </Typography>
      </Box>

      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          sx={{ mb: 1, borderBottom: 1, borderColor: "divider", pb: 0.5 }}
        >
          Detalles
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.6 }}>
          {Object.entries(formData).map(([label, valor]) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {label.charAt(0).toUpperCase() + label.slice(1)}:
              </Typography>
              <Typography variant="caption" fontWeight="600">
                {String(valor)}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* <Button
          variant="contained"
          color="success"
          fullWidth
          sx={{
            mt: 2,
            py: 0.8,
            fontSize: "0.75rem",
            textTransform: "none",
            fontWeight: "bold",
          }}
          onClick={() => alert("Funcionalidad de continuar...")}
        >
          Aceptar y Continuar
        </Button> */}
      </CardContent>
    </Card>
  );
};




export default StepPaso3