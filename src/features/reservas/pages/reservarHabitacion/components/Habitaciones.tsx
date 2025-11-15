import { Box, Button, Typography } from "@mui/material";

import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import { About } from "../../../../home/components";
import { Link, useNavigate } from "react-router-dom";
import type { HabitacionProps } from "../types/typesHabitacion";
import { useContext } from "react";
import { UserContext } from "../../../../../shared/context/userContext";

function Habitaciones({ habitaciones, formData }: HabitacionProps) {
  const navigate = useNavigate();

  const {state} = useContext(UserContext)

  
  const handleReserva = (item: any) => {
    if ( !formData.entrada || !formData.salida || !state.cliente) {
      alert("Debes completar todos los datos antes de continuar de entrada y salida.");
      return;
    }
    navigate("/confirmarreserva", { state: { item, formData } });
  };

  return (
    <>
      <Box
        sx={{
          color: "black",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        {habitaciones?.map((item: any) => (
          <Box
            sx={{
              width: "400px",
              background: "white",
              borderRadius: "20px",
              margin: "0px auto",
            }}
          >
            <Box sx={{ marginBottom: "15px", Height: "200px" }}>
              <img
                src={item.categorias_habitacion.img}
                style={{
                  height: "40",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "20px 20px 0px 0px",
                }}
              />
            </Box>

            <Box sx={{ marginLeft: "13px", display: "grid", gap: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Typography id="nombre" variant="h6" sx={{ fontWeight: "550" }}>
                  {item.categorias_habitacion?.nombre
                    ? item.categorias_habitacion.nombre
                        .charAt(0)
                        .toUpperCase() +
                      item.categorias_habitacion.nombre.slice(1)
                    : ""}
                </Typography>
                <Typography id="piso" variant="h6" sx={{ fontWeight: "550" }}>
                  {item.numero}
                </Typography>
              </Box>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <PeopleOutlinedIcon /> {item.categorias_habitacion.capacidad}{" "}
                Personas
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <WifiOutlinedIcon /> Wifi gratis
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <DoneOutlinedIcon />
                Reserva ahora,paga depues
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                Parcialmente reembolsable
                <InfoOutlinedIcon />
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "15px" }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography id="precio">
                  {item.categorias_habitacion.precio.toLocaleString("es-CO", {
                    style: "currency",
                    currency: "COP",
                    minimumFractionDigits: 3,
                  })}
                </Typography>
                <Typography>Impuesto y cargos incluidos</Typography>
              </Box>
              <Typography mt={1}>Disponible:2</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "self-end",
                  gap: "10px",
                  flexDirection: "column",
                  marginBottom: "5px",
                }}
              ></Box>
            </Box>

            <Link
              to="#"
              style={{
                cursor: "pointer",
                position: "relative",
                bottom: "14px",
                left: "15px",
              }}
            >
              Mas detalles
            </Link>

            <Box sx={{ p: "15px" ,textAlign:"center"}}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(135deg, #0c5babff, #0265c7ff)",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  padding: "10px 25px",
                  boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.3)",
                  textTransform: "none",
                }}
                onClick={() => handleReserva(item)}
              >
                Reservar
              </Button>
            </Box>
            
          </Box>
        ))}

        <About />
      </Box>
    </>
  );
}

export default Habitaciones;
