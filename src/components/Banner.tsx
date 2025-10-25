import { Box, Container, Typography } from "@mui/material";
import img1 from "../img/img1.jpg";


const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "450px",
        width:"1100px",  
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        overflow: "hidden",
        margin:"75px auto",
        borderRadius:"25px  ",
      }}
    >  
      
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right , rgba(0,0,0,0.7) 15%, rgba(0,0,0,0) 70%)",
          zIndex: 0,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          color: "white",
          top:"75px"
        }}
      >
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
             BahiaHost
            </Typography>
            <Typography variant="h6" sx={{ mb: 3,width:"510px" }}>
              Equilibrio perfecto entre el Mar, el Sol 
              y el descanso que mereces
            </Typography>
    
      </Container>
    </Box>
  );
};

export default Banner;



