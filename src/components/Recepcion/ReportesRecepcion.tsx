import { Box, Typography, Grid, Paper } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import PercentIcon from "@mui/icons-material/Percent";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";

const ReportesRecepcion = () => {
  return (
    <Box
      sx={{
        width:"100%" ,
        padding:"25px"    
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
           mb: 3,
          pb: 1,
          borderBottom: "2px solid",
          borderColor: "divider",
        }}
      >
        Reportes y Análisis
      </Typography>

      <Box sx={{ backgroundColor: "white", p: 4, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Selección de Reporte
        </Typography>

        <Grid container spacing={2}>
          <Grid size={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: "center",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <ShowChartIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                Ingresos Mensuales
              </Typography>
            </Paper>
          </Grid>

          <Grid size={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: "center",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <PercentIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                Ocupación Histórica
              </Typography>
            </Paper>
          </Grid>

          <Grid size={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                textAlign: "center",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": { backgroundColor: "#f9fafb" },
              }}
            >
              <PersonPinCircleIcon color="primary" sx={{ fontSize: 32, mb: 1 }} />
              <Typography sx={{ fontWeight: 500, fontSize: 14 }}>
                Procedencia de Huéspedes
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            p: 3,
            backgroundColor: "#f3f4f6",
            borderRadius: 2,
            border: "2px solid #d1d5db",
          }}
        >
          <Typography
            align="center"
            sx={{ fontStyle: "italic" }}
          >
            Gráficos 
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


export default ReportesRecepcion
