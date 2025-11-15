import { Box, Grid, Paper, Typography } from "@mui/material"
import RecienteActividad from "./RecienteActividad"

const DashboardRecepcion = () => {


  
  return (
     <Box sx={{ width: "100%",height:"100vh", bgcolor: "#f9fafb"}}>
    
            <Box sx={{ mt: 3, px: { xs: 2, } }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
          sx={{ mb: 3, pb: 1, borderBottom: "2px solid #e5e7eb" }}
        >
          Dashboard Principal
        </Typography>

        <Grid container spacing={3}>
          <Grid size={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderTop: "4px solid",
                borderColor: "#4F46E5",
                borderRadius: 3,
                transition: "box-shadow 0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    bgcolor: "#E0E7FF",
                    color: "#4F46E5",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                  }}
                >
                  +12%
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={1}>
                75%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Tasa de Ocupación Hoy
              </Typography>
            </Paper>
          </Grid>

          <Grid size={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderTop: "4px solid",
                borderColor: "#10C79B",
                borderRadius: 3,
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    bgcolor: "#D1FAE5",
                    color: "#10C79B",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                  }}
                >
                  Meta
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={1}>
                $ 8,500
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ingreso Estimado (Hoy)
              </Typography>
            </Paper>
          </Grid>

          <Grid size={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderTop: "4px solid",
                borderColor: "#F59E0B",
                borderRadius: 3,
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    bgcolor: "#FEF3C7",
                    color: "#F59E0B",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                  }}
                >
                  Mañana
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={1}>
                15
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Check-ins Pendientes
              </Typography>
            </Paper>
          </Grid>

          <Grid size={3}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderTop: "4px solid #9DA4B0",
                borderRadius: 3,
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box>
                <Typography
                  variant="caption"
                  fontWeight="bold"
                  sx={{
                    bgcolor: "#f3f4f6",
                    color: "#9DA4B0",
                    px: 1,
                    py: 0.2,
                    borderRadius: 1,
                  }}
                >
                  Total: 80
                </Typography>
              </Box>
              <Typography variant="h4" fontWeight="bold" mt={1}>
                20
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Habitaciones Disponibles
              </Typography>
            </Paper>
          </Grid>
        </Grid>
       <Box sx={{marginTop:"45px"}}>

          <RecienteActividad/>
       </Box>
       

      </Box>
    </Box>
  )
}

export default DashboardRecepcion
