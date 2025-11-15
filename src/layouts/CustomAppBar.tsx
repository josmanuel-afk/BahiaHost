import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import { supaBase } from '../api/supabase/clienst';
import { useContext } from 'react';
import { UserContext } from '../shared/context/userContext';



const navItems = [
  {
     item:'Home',
     url:"/"
    }, 
    {
      item:'Reservar',
      url:"/reservar"

    },
  {
     item:'SPA',
     url:"/reservarspa"
  },
   {
      item:'Gym',
      url:"/reservargym"

    }
    ];

const CustomAppBar =()=> {
const Navigate = useNavigate();


const {state} = useContext(UserContext)

const handleLogout = async () => {
  await supaBase.auth.signOut();
  Navigate("/iniciarSesion"); 
};


  return (
    <Box sx={{ display: 'flex' }}>
          <AppBar component="nav" sx={{backgroundColor:"#1976D2",boxShadow: 'none',color:"white"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' }}}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
             BahiaHost
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((nav) => (
              <Link to={nav.url}>
              <Button key={nav.item} sx={{ color: 'white' }}>
                {nav.item}
              </Button>
              </Link>
              
            ))}
          </Box>

        

          {

            

            state.cliente? (
            <Button variant="contained" color="info" onClick={handleLogout} >
            Cerrar Sesión
            </Button>) : 
            <Link to={"/iniciarsesion"}>
                <Button  variant="contained" color="info" >Iniciar Sesion</Button>
            </Link>
           
            
          }
        </Toolbar>
      </AppBar>
      <nav>
    
      </nav>
      
    </Box>
  );
}


export default CustomAppBar 