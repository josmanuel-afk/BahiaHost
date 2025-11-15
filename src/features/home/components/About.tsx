import { Box, Grid, Typography } from "@mui/material"
import cama from "../../../assets/img/cama.png"
import sofa from "../../../assets/img/sofa.png"
import wifi from "../../../assets/img/wifi.png"
import air from "../../../assets/img/air.png"
import ducha from "../../../assets/img/ducha.png"
import mini_bar from "../../../assets/img/mini-bar.png"


const About = () => {

 

  return (
 <Box  sx={{backgroundColor:"#f1f3f6ff",width:"100%",height:"130vh",padding:"5px"}}>
    <Box  sx={{margin:"100px"}} >
      <Typography variant="h3" sx={{textAlign:"center",marginBottom:"105px"}}>Beneficios</Typography>
        <Grid container spacing={10} sx={{marginBottom:"175px"}}>

          <Grid  size={4} style={{display:"flex", flexDirection:"column", gap:"10px"}}> 
          <Box  style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}}> 
            <img  src={cama} style={{width:"75px",objectFit:"cover"}}/>
            <Typography>Cama Doble</Typography>
          </Box>
          <Box> 
            <Typography>La gran cama doble hará que su sueño sea reparador y reparador.</Typography> 
            </Box>
          </Grid>

          <Grid size={4}  style={{display:"flex", flexDirection:"column", gap:"30px"}}>
            <Box style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}} > 
            <img  src={sofa} style={{width:"75px"}}/>
          <Typography>Sofá disponible</Typography>
          </Box>
          <Box> 
          <Typography> Utilice un sofá cómodo si sólo desea relajarse por un corto período de tiempo.</Typography> 
          </Box>
          </Grid>

          <Grid size={4}  style={{display:"flex", flexDirection:"column", gap:"18px"}}> 
          <Box style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}}> 
          <img  src={wifi} style={{width:"75px", objectFit:"cover"}}/>
          <Typography>Wifi Gratis</Typography>
          </Box>
          <Box> 
          <Typography>Nuestros huéspedes pueden utilizar Wi-Fi de forma gratuita en todo el territorio del hotel.</Typography> 
          </Box>
          </Grid>

          <Grid size={4}  style={{display:"flex", flexDirection:"column", gap:"30px"}}>
            <Box style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}}> 
            <img  src={air} style={{width:"75px",objectFit:"cover"}}/>
          <Typography>Aire acondicionado</Typography>
          </Box>
          <Box> 
          <Typography>Contamos con un sistema de aire acondicionado perfecto que está disponible 24 horas al día, 7 días a la semana.</Typography> 
          </Box>
          </Grid>

          <Grid size={4}  style={{display:"flex", flexDirection:"column", gap:"30px"}} > 
          <Box style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}}>  
          <img  src={ducha} style={{width:"75px",objectFit:"cover"}}/>
          <Typography>Baño privado</Typography>
          </Box>
          
          <Box> 
          <Typography>Baño y sanitarios privados están a su servicio, no se requiere pago adicional.</Typography> 
          </Box>
          </Grid>

          <Grid size={4}  style={{display:"flex", flexDirection:"column", gap:"30px"}}>
            <Box style={{display:"flex", alignItems:"center",gap:"20px",justifyContent:"center"}}> 
            <img  src={mini_bar} style={{width:"75px",objectFit:"cover"}}/> 
            <Typography>Mini Gratis</Typography>
            </Box>
            <Box>
              <Typography>El minibar se repone con refrescos y snacks todos los días.</Typography> 
              </Box>
          </Grid>


        </Grid>
    </Box>
  
  
 </Box>


  );
};

export default About;

    