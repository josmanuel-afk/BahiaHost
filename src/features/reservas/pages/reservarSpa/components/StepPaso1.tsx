
 import { Box, Typography, Chip, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../../../../shared/context/userContext";



const StepPaso1 =({}:any)=>{
   const {state} = useContext(UserContext);


   
    return(
         <Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", pb: 2, mb: 3, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Información del Huésped
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 2,
          borderRadius: 3,
          backgroundColor: "rgba(99, 102, 241, 0.1)",
          border: "1px solid rgba(99, 102, 241, 0.3)", 
          display:"flex",
          justifyContent:"space-between"
        }}
      >
        <Box mb={2}>
          <Typography variant="body2" color="text.secondary" fontWeight={500} mb={0.5}>
            Huésped:
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="primary.dark">
            {state?.cliente?.nombre} {state?.cliente?.apellido}
          </Typography>
        </Box>

        <Box>
          <Typography variant="body2" color="text.secondary" fontWeight={500} mb={0.5}>
            Habitación: 
          </Typography>
          <Chip
            label={state?.reservas?.habitaciones?.numero || "No asignada"}
            sx={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              bgcolor: "primary.main",
              color: "white",
              px: 2,
              py: 1,
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
        </Box>
      </Paper>

      {/* Estado */}
      <Box textAlign="center" mt={2}>
        <Chip
          label="Asignación Confirmada"
          size="small"
          sx={{
            bgcolor: "purple.100",
            color: "purple.700",
            fontWeight: "600",
          }}
        />
      </Box>
    </Box>
  )

 } 


  export default StepPaso1