import { Box, Container, Typography } from "@mui/material"

const Filtro = () => {
  return (
    <Container sx={{
         margin:"0px auto",
         height:"205px",
        width:"950px", 
        position:"relative",
        bottom:"200px",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:5,
        overflow: "hidden",
        borderRadius:"20px",
        }}> 
        
        <Box  sx={{
      position: 'absolute',
      inset: 0,
     backgroundColor: "rgba(4, 17, 61, 0.6)",
      backdropFilter: 'blur(10px)',
      zIndex: 1,
    }}/>



       

       <Box sx={{
          
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          width: "100%", }}>

           <Box sx={{borderRight: "1px solid white",height:"75px",padding:"25px",flex:2}} >
            <Typography  variant="h6">Tipo de Hbitaciones</Typography>

        </Box>
        <Box sx={{borderRight: "1px solid white",height:"75px",padding:"25px",flex:1}} >
             <Typography variant="h6">Check in </Typography>
        </Box>
        <Box sx={{borderRight: "1px solid white",height:"75px",padding:"25px",flex:1}} >
             <Typography variant="h6">Check out</Typography>
        </Box>
        <Box sx={{flex:1}}>
             <Typography variant="h6">Buscar</Typography>
        </Box>
       </Box>
      
    </Container>
  )
}

export default Filtro
