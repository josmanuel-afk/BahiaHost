import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { supaBase } from "../api/supabase/clienst";

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/iniciarsesion"); 
  };

  const handleLogout = async () => {
    await supaBase.auth.signOut();
    navigate("/iniciarSesion"); 
  };
  

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
      textAlign="center"
      p={2}
    >
      <LockIcon sx={{ fontSize: 80, color: "orange", mb: 2 }} />
      <Typography variant="h3" gutterBottom>
        ¡Acceso Denegado!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        No tienes permisos para ver esta página.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Volver al inicio
      </Button>  
       <Button variant="contained" color="info" onClick={handleLogout} >
            Cerrar Sesión
            </Button>
    </Box>
  );
};

export default UnauthorizedPage;
