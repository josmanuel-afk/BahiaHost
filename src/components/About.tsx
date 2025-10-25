import { Box, Grid, Typography } from "@mui/material"
import cama from "../img/cama.png"
import sofa from "../img/sofa.png"
import wifi from "../img/wifi.png"
import air from "../img/air.png"
import ducha from "../img/ducha.png"
import mini_bar from "../img/mini-bar.png"


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

    // <Box
    //   sx={{
    //     width: "100%",
    //     minHeight: "100vh",
    //     backgroundColor: "white",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexWrap: "wrap",
    //       justifyContent: "center",
    //       alignItems: "flex-start",
    //       gap: "60px",
    //       padding: "60px",
    //       maxWidth: "1200px",
    //       border:"1px solid red"
    //     }}
    //     className="about"
    //   >
    //     {/* Item 1 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px",border:"1px solid red" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={cama} alt="Cama doble" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Cama Doble</Typography>
    //       </Box>
    //       <Typography>La gran cama doble hará que su sueño sea reparador y placentero.</Typography>
    //     </Box>

    //     {/* Item 2 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={sofa} alt="Sofá" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Sofá disponible</Typography>
    //       </Box>
    //       <Typography>Utilice un sofá cómodo si sólo desea relajarse por un corto período de tiempo.</Typography>
    //     </Box>

    //     {/* Item 3 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={wifi} alt="Wifi" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Wifi Gratis</Typography>
    //       </Box>
    //       <Typography>Nuestros huéspedes pueden utilizar Wi-Fi de forma gratuita en todo el hotel.</Typography>
    //     </Box>

    //     {/* Item 4 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={air} alt="Aire acondicionado" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Aire acondicionado</Typography>
    //       </Box>
    //       <Typography>Contamos con un sistema de aire acondicionado disponible 24/7.</Typography>
    //     </Box>

    //     {/* Item 5 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={ducha} alt="Baño privado" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Baño privado</Typography>
    //       </Box>
    //       <Typography>Baño y sanitarios privados están a su servicio sin pago adicional.</Typography>
    //     </Box>

    //     {/* Item 6 */}
    //     <Box sx={{ width: { xs: "100%", sm: "45%", lg: "30%" }, display: "flex", flexDirection: "column", gap: "10px" }}>
    //       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
    //         <img src={mini_bar} alt="Minibar" style={{ width: "75px", objectFit: "cover" }} />
    //         <Typography>Mini Bar Gratis</Typography>
    //       </Box>
    //       <Typography>El minibar se repone con refrescos y snacks todos los días.</Typography>
    //     </Box>
    //   </Box>
    // </Box>