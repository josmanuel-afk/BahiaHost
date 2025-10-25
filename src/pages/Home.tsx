
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import Filtro from '../components/filtro'
import Collage from '../components/Collage'
import About from '../components/About'
import Servicios from '../components/Servicios'
import CustomAppBar from '../components/CustomAppBar '

function Home() {
  return (
    
    <Box sx={{backgroundColor:"#101158ff",Height: "",
  width: "100%",
 }}> 
        <CustomAppBar/>
        <Banner/>
          <Filtro/>
          <Collage/>
          <Servicios/>
          <About/>
    
       

        
      
    </Box>
  )
}

export default Home
