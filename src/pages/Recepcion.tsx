// En el archivo Recepcion.jsx

import { Box  } from "@mui/material"
import AppBarRecepcion from "../components/Recepcion/appBarRecepcion";
import { Outlet } from "react-router-dom";

const Recepcion = () => {


 
  return (
    <Box sx={{ display: 'flex' }}>
        <AppBarRecepcion/>

        <Outlet/>
     
    </Box>
  );
};

export default Recepcion;