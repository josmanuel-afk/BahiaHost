
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import Collage from '../components/Collage'
import About from '../components/About'
import Servicios from '../components/Servicios'



function Home() {


  return (
    
    <Box sx={{backgroundColor:"#1976D2",Height: "auto",
  width: "100%",paddingTop:"25px"
 }}> 
        <Box sx={{marginBottom:"235px"}}>
            <Banner/>
        </Box>
          <Collage/>
          <Servicios/>
          <About/>
    </Box>
  )
}

export default Home













