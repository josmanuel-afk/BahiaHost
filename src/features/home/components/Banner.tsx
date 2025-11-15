import { Box, Container, Typography } from "@mui/material";
import img1 from "../../../assets/img/img1.jpg";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "300px", md: "450px" },
        width: "100%",
        maxWidth: "1100px",
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        margin: "60px auto",
        borderRadius: "25px",
        transition: "transform 0.5s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 80%)",
          zIndex: 0,
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: { xs: 2, md: 4 },
          paddingTop: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          BahiaHost
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            width: { xs: "100%", md: "510px" },
            fontSize: { xs: "1rem", md: "1.25rem" },
          }}
        >
          Equilibrio perfecto entre el Mar, el Sol y el descanso que mereces
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
