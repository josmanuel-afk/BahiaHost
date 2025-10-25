import { Box, Grid, Typography ,Link} from '@mui/material'
import img5 from "../img/img5.jpg"
import img4 from "../img/img4.jpg"
import img6 from "../img/img6.jpg"

function Servicios() {
  return (
    <Box sx={{width:"100%",height:"100vh",backgroundColor:"#f1f3f6ff",overflow:"hidden"}}>
        
            <Typography variant='h2' sx={{textAlign:"center",margin:"75px"}}>Servicies</Typography>
     
        <Grid container spacing={10} sx={{width:"1050px",margin:"0px auto"}}>
            <Grid size={4}  sx={{ transition:"ease-in-out .5s",'&:hover':{ transform: 'scale(1.1)',cursor:"pointer"}}}>
               <Link   href="/restaurante"> 
                <img src={img5} style={{width:"300px",height:"400px", objectFit:"cover",borderRadius:"20px"}} /> 
                </Link>
                  <Typography variant='h5' sx={{position:"relative",bottom:"65px", left:"65px",color:"white",fontSize:"35px"}}>Restaurant</Typography>
            </Grid>
            <Grid size={4}  sx={{transition:"ease-in-out 0.5s",'&:hover':{  transform: 'scale(1.1)',cursor:"pointer"}}}>
            <Link href="/reservarspa" sx={{textDecoration:"none",}}>
                <img src={img4} style={{width:"300px", height:"400px", objectFit:"cover", borderRadius:"20px"}}/>
                <Typography variant='h5'  sx={{position:"relative",bottom:"65px", left:"105px", color:"white",fontSize:"35px"}}>Spa</Typography> </Link>
            </Grid>
            <Grid size={4}  sx={{transition:"ease-in-out  .5s",'&:hover':{ transform: 'scale(1.1)',cursor:"pointer"}}}>
            <Link href="/reservargym" sx={{textDecoration:"none",}}>
                <img src={img6} style={{width:"300px",height:"400px", objectFit:"cover",borderRadius:"20px"}}/>
                <Typography variant='h5'  sx={{position:"relative",right:"-105px", bottom:"65px",color:"white",fontSize:"35px"}}>Gym</Typography></Link>
            </Grid>
        </Grid>

       

        
      
        
     </Box>
  )
}

export default Servicios