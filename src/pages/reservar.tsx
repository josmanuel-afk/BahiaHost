import img1_galeria from "../img/img1-galeria.webp"
import img2_galeria from "../img/img-2-galeria.jpg"
import img3_galeria from "../img/img-3-galeria.jpg"
import img4_galeria from "../img/img-4-galeria.jpg"
import img5_galeria from "../img/img-5-galeria.jpg"
import { Box } from '@mui/material'
import Menu from '../components/CustomAppBar '
import CheckOut from '../components/CkeckOut'
import Habitaciones from '../components/Habitaciones'


const img = [img2_galeria, img1_galeria,img3_galeria,img4_galeria,img5_galeria]





function Reservar() {


  return (
   
    
      <Box className='Reservas' sx={{backgroundColor:"#f1f3f6ff"}}>
        <Menu/>
        <CheckOut/>

       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"5px",marginTop:"45px",marginBottom:"45px"}}>
        {
          img.map((item,index)=>((
            <div className='galeria'> 
            <img src={item} style={{width:"400px" ,height:"300px",objectFit:"cover",borderRadius:"15px"}}/>
            </div>


   
          )))
        }
       </Box>


         <Habitaciones/>
   
         
      </Box>  


    
      
  )
}



export default Reservar