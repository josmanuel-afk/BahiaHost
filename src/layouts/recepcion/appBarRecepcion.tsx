import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,} from "@mui/material";
import logo from "../../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import FooterAdmin from "../../features/recepcion/components/FooterAdmin";
import { supaBase } from "../../api/supabase/clienst";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function AppBarRecepcion() {




const data = [
          
           { 
            name:"Reservas",
             icono: <EventOutlinedIcon sx={{fontSize:"30px"}}/>

           },
            {
              name:"Habitaciones",
               icono: <HotelOutlinedIcon sx={{fontSize:"30px"}}/>
              
            },
            {
              name:"Huesped",
               icono: <WcOutlinedIcon sx={{fontSize:"30px"}}/>
            },
            
          ]


  const handleLogout = async () => {
    await supaBase.auth.signOut();
    console.log("object")
  };
  


  const drawerContent = ( 
    <Box
      sx={{
        width: "250px",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <List>
          <ListItem disablePadding>
              <Box  component={Link} to="/recepcion"sx={{textDecoration:"none",color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <Box
                  component="img"
                  src={logo}
                  alt="logo"
                  sx={{
                    width: 120,
                    height: "auto",
                    objectFit: "contain",
                    borderRadius:"50%"
                  }}
                ></Box>

                <Typography variant="h4">BahiaHost</Typography>
              </Box>
          </ListItem>
        </List>

        <Divider />

        <List>
          {data.map((data) => (
            <ListItem key={data.name} disablePadding sx={{textDecoration:"none",color:"white",marginBottom:"20px"}}>
            
              <ListItemButton 
              component={Link} 
                   to={
                     data.name === "Reservas"
                          ? "/recepcion"
                          : data.name
                    }

              
              sx={{ display:"flex",alignContent:"center ",gap:"15px",textDecoration: "none",color:"white",width:"100%" }}>
                  {data.icono}

                  {data.name}
               
              </ListItemButton>
            </ListItem>
          ))}


          <ListItem 
          component={Button}
          onClick={handleLogout}
          sx={{ display:"flex",alignContent:"center ",gap:"15px",textDecoration: "none",color:"white",width:"100%" }}>
          <LogoutOutlinedIcon sx={{fontSize:"30px"}}/>
             Cerrar Sesion
          </ListItem>
        </List>
      </Box>

      <Divider />
      <List>
        <FooterAdmin/>
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: "250px",
          [`& .MuiDrawer-paper`]: {
            width: "250px",
            boxSizing: "border-box",
            backgroundColor: "#101158ff",
            color: "white",
            overflow: "hidden",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default AppBarRecepcion;
