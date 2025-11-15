// En el archivo Recepcion.jsx

import { Box  } from "@mui/material"
import { Outlet } from "react-router-dom";
import AppBarRecepcion from "../../../layouts/recepcion/appBarRecepcion";
import { RecepcionProvider } from "../context/RecepcionProvider";

const Recepcion = () => {


 
  return (
    <Box sx={{ display: 'flex' }}>
        <AppBarRecepcion/>
        <RecepcionProvider>
            <Outlet/>
        </RecepcionProvider>
    </Box>
  );
};

export default Recepcion;