import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { supaBase } from "../../../api/supabase/clienst";
import { useNavigate } from "react-router-dom";

  

interface AppBarPersonalProp {
  personal:""
}


export default function AppBarPersonal({personal}:AppBarPersonalProp) {


  const navigate = useNavigate()

const handleLogout = async () => {
  await supaBase.auth.signOut();
  navigate("/iniciarSesion"); 
};



  return (
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Panel de Hotel Bahia Host
        </Typography>

        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body1">Hola, {personal}</Typography>
          <Button
            onClick={handleLogout}
            variant="outlined"
            color="inherit"
            sx={{ borderColor: "white", color: "white" }}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
