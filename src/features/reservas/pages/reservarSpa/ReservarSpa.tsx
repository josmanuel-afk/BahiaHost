import { Box, Typography } from "@mui/material";
import img_spa from "../../../../assets/img/img-spa.jpg";
import img_spa_2 from "../../../../assets/img/img-spa-2.jpg";
import img_spa_3 from "../../../../assets/img/img-spa-3.webp";
import img_spa_4 from "../../../../assets/img/img-spa-4.jpg";
import img_spa_5 from "../../../../assets/img/img-spa-5.jpg";
import img_spa_6 from "../../../../assets/img/img-spa6.webp";
import img_spa_7 from "../../../../assets/img/img_spa_7.jpg";
import img_spa_8 from "../../../../assets/img/img_spa_8.jpg";

import CustomAppBar from "../../../../layouts/CustomAppBar";

import CustomStep from "./components/CustomStep";
import Collage from "../../components/Collage";
import { UserContext } from "../../../../shared/context/userContext";
import { useContext } from "react";

const galeria_spa = [
  { src: img_spa, alt: "Spa 1" },
  { src: img_spa_2, alt: "Spa 2" },
  { src: img_spa_3, alt: "Spa 3" },
  { src: img_spa_4, alt: "Spa 4" },
  { src: img_spa_5, alt: "Spa 5" },
  { src: img_spa_6, alt: "Spa 6" },
  { src: img_spa_7, alt: "Spa 7" },
  { src: img_spa_8, alt: "Spa 8" },
];

function ReservarSpa() {
  const { state } = useContext(UserContext);

  const nombreCliente = state?.cliente?.nombre || ''

  console.log(state, "spa");

  return (
    <Box>
      <CustomAppBar />
      <Box
        sx={{
          color: "black",
          paddingBottom: "145px",
          marginTop: "-55px",
          background: "#f1f3f6ff",
          pointerEvents: state.reservas ? "auto" : "none",
          opacity: state.reservas ? 1 : 0.5,
        }}
      >
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="text.primary"
            sx={{ mt: 15, textAlign: "center" }}
          >
            Spa
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "45px",
              marginBottom: "45px",
            }}
          >
            <Collage images={galeria_spa} />
          </Box>

          <Box sx={{ width: "100%", marginTop: "85px" }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ textAlign: "center", mb: "12px" }}
            >
              Reserva
            </Typography>

            <CustomStep />
          </Box>

          {!state.reservas && (
            <Box
              sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  p: 3,
                  bgcolor: "primary.main",
                  borderRadius: 2,
                }}
              >
                {`${nombreCliente}, Necesita hacer una Reserva para desbloquear esta sección`}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ReservarSpa;
