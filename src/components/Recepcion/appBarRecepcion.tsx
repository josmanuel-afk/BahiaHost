import Typography from "@mui/material/Typography";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import logo from "../../img/Logo.png";
import { Link } from "react-router-dom";
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FooterAdmin from "./FooterAdmin";

function AppBarRecepcion() {

const data = [
           { 
            name:"Dashboard",
            icono: <DashboardCustomizeOutlinedIcon sx={{fontSize:"30px"}}/>

           },
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
            {
              name:"Reportes ",
               icono: <AssessmentOutlinedIcon sx={{fontSize:"30px"}}/>
            },
          ]


  
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
            
              <ListItemButton to={data.name ==="Dashboard"? "/recepcion":data.name}  component={Link} sx={{ display:"flex",alignContent:"center ",gap:"15px",textDecoration: "none",color:"white",width:"100%" }}>
                  {data.icono}

                  {data.name}
               
              </ListItemButton>
            </ListItem>
          ))}
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
