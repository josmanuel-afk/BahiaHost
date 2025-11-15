import { Box, Typography, Link, Divider } from "@mui/material";
import { Facebook, Instagram, Twitter, LocationOn, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0c5babff",
        color: "white",
        padding: "50px 20px 20px 20px",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1100px",
          gap: 4,
        }}
      >
        
        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            BahiaHost
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Vive la experiencia única de descanso, confort y atención personalizada.  
            Tu refugio junto al mar te espera.
          </Typography>
        </Box>

        
        <Box sx={{ flex: "1 1 180px", minWidth: "180px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Enlaces
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" color="inherit" underline="hover">Inicio</Link>
            <Link href="#" color="inherit" underline="hover">Habitaciones</Link>
            <Link href="#" color="inherit" underline="hover">Reservas</Link>
            <Link href="#" color="inherit" underline="hover">Contacto</Link>
          </Box>
        </Box>

        
        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contáctanos
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOn fontSize="small" />
            <Typography variant="body2">CL 78B #72 A-220,Medellin,</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Phone fontSize="small" />
            <Typography variant="body2">+57 310 7439404</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Email fontSize="small" />
            <Typography variant="body2">contacto@bahiahost.com</Typography>
          </Box>
        </Box>

        
        <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Síguenos
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit"><Facebook /></Link>
            <Link href="#" color="inherit"><Instagram /></Link>
            <Link href="#" color="inherit"><Twitter /></Link>
          </Box>
        </Box>
      </Box>

      
      <Divider sx={{ width: "100%", maxWidth: "1100px", borderColor: "rgba(255,255,255,0.2)" }} />

      
      <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
        © {new Date().getFullYear()} BahiaHost. Todos los derechos reservados.
      </Typography>

    </Box>
  );
};

export default Footer;
