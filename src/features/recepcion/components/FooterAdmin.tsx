import { Box, Typography } from "@mui/material";

const FooterAdmin = () => {
  return (
    <Box
      sx={{
        p: 2, 
        borderTop: "1px solid",
        borderColor: "rgba(99, 102, 241, 0.3)", 
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
    
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "rgba(99, 102, 241, 0.3)", 
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          A
        </Box>
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Admin Hotel
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "rgba(199, 210, 254, 1)" }} 
          >
            Recepción
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterAdmin;
