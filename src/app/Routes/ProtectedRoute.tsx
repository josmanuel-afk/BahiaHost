import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../shared/context/userContext";
import { Box } from "@mui/material";


type Role = "admin" | "cliente" | "limpieza" | "mantenimiento";

interface ProtectedRouteProps {
  allowedRoles: Role[]; 

}

const ProtectedRoute = ({ allowedRoles}:ProtectedRouteProps) => {



  const {state } = useContext(UserContext);


   if(state.loading){
    return <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Cargando sesión...
      </Box>
   }
   


    if (allowedRoles.length === 0) {
    return <Outlet />;
  }

  if (!state.cliente && !state.personal) {
      return <Navigate to="/iniciarsesion" replace />;
  }

  const usuarioRol = state?.cliente?.roles?.nombre_rol || state?.personal?.roles?.nombre_rol;


  

  if (!usuarioRol || !allowedRoles.includes(usuarioRol as Role)) {
    return <Navigate to="/unauthorized" replace />;
  }



  return <Outlet />;
};

export default ProtectedRoute;
