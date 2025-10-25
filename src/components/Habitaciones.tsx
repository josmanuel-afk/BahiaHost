import { Box, Typography, Link } from "@mui/material";

import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import cama_doble from "../img/cama-doble-2.jpg";
import cama_sencilla from "../img/cama-sencilla.jpg";
import cama_separadas from "../img/Cama-separas.jpg";
import cama_separadas_doble from "../img/cama-separada-doble.jpg";
import cama_suit from "../img/cama-suit.jpg";
import About from "../components/About";

const cards_camas = [
  {
    img: cama_doble,
    nombre: "Habitacion Estandar",
    piso: "201",
    capacidad: "2 persona",
    precio: "250.000",
    camas: "2 cama individual",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_sencilla,
    nombre: "Habitacion Estandar Basica",
    piso: "202",
    capacidad: "1 personas",
    precio: "150.000",
    camas: "1 camas individuales",
    disponible: 2,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_doble,
    nombre: "Habitacion Estandar",
    piso: "203",
    capacidad: "2 persona",
    precio: "250.000",
    camas: "2 cama individual",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "204",
    capacidad: "2 personas",
    precio: "300.000",
    camas: "2 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_doble,
    nombre: "Habitacion Estandar",
    piso: "205",
    capacidad: "2 personas",
    precio: "250.000",
    camas: "1 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    piso: "206",
    precio: "350.000",
    camas: "2 camas Individuales ",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "301",
    capacidad: "2 personas",
    precio: "300.000",
    camas: "2 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "302",
    capacidad: "2 persona",
    precio: "300.000",
    camas: "2 cama individual",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_doble,
    nombre: "Habitacion Estandar",
    piso: "303",
    capacidad: "1 personas",
    precio: "150.000",
    camas: "1 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "304",
    capacidad: "2 personas",
    precio: "300.000",
    camas: "2 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "305",
    precio: "300.000",
    camas: "2 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    capacidad: "3 personas",
    piso: "306",
    precio: "300.000",
    camas: "2 camas individuales",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    piso: "401",
    capacidad: "3 persona",
    precio: "300.000",
    camas: "2 cama individual",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    piso: "402",
    capacidad: "3 persona",
    precio: "300.000",
    camas: "2 cama individual",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_doble,
    nombre: "Habitacion Estandar",
    piso: "403",
    capacidad: "2 personas",
    precio: "250.000",
    camas: "1 camas individuales",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas,
    nombre: "Habitacion Doble",
    piso: "404",
    precio: "250.000",
    camas: "2 camas individual",
    disponible: 5,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    piso: "405",
    capacidad: "3 persona",
    precio: "300.000",
    camas: "2 cama individual",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_separadas_doble,
    nombre: "Habitacion Familiar",
    piso: "406",
    capacidad: "3 persona",
    precio: "300.000",
    camas: "2 cama individual",
    disponible: 6,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_suit,
    nombre: "Suit",
    piso: "501",
    precio: "500.000",
    camas: "cama Matrimonial",
    disponible: 3,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_suit,
    nombre: "Suit",
    piso: "502",
    precio: "500.000",
    camas: "cama Matrimonial",
    disponible: 3,
    disponibleCuarto: true,
    limpieza: false,
  },
  {
    img: cama_suit,
    nombre: "Suit",
    piso: "503",
    precio: "500.000",
    camas: "cama Matrimonial",
    disponible: 3,
    disponibleCuarto: true,
    limpieza: false,
  },
];

function Habitaciones({}) {
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
        {cards_camas.map((item) => (
          <Box
            sx={{ width: "400px", background: "white", borderRadius: "20px",margin:"0px auto" }}
          >
            <Box sx={{ marginBottom: "15px", Height: "200px" }}>
              <img
                src={item.img}
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
                  {item.nombre}
                </Typography>
                <Typography id="piso" variant="h6" sx={{ fontWeight: "550" }}>
                  {item.piso}
                </Typography>
              </Box>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <BedOutlinedIcon />
                {item.camas}
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <PeopleOutlinedIcon /> {item.capacidad}
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
                <Typography id="precio">COP {item.precio}</Typography>
                <Typography>Impuesto y cargos incluidos</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "self-end",
                  gap: "10px",
                  flexDirection: "column",
                  marginBottom: "5px",
                }}
              >
                <Typography sx={{ fontSize: "12px" }}>
                  Disponible {0}
                </Typography>
              </Box>
            </Box>

            <Link
              style={{
                cursor: "pointer",
                position: "relative",
                bottom: "14px",
                left: "15px",
              }}
            >
              Mas detalles
            </Link>

            <Box sx={{ marginTop: "35px" }}></Box>

            <Link
              href="/reservar"
              sx={{
                width: "205px",
                position: "relative",
                left: "150px",
                border: "1px solid blue",
                borderRadius: "12px",
                color: "white",
                background: "blue",
                padding: "12px",
                textDecoration:"none"
              }}
            >
              Reservas
            </Link>
          </Box>
        ))}

        <About />
      </Box>
    </>
  );
}

export default Habitaciones;
