import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useContext} from "react";
import { RecepcionContext } from "../context/RecepcionContext";
import ModalReserva from "./ModalReservas";
import ModalReservaEdit from "./ModalReservaEdit";
import { useHuespedes } from "./useHuespedes";


const ReservasRecepcion = () => {

// const reservasIniciales = [
//   {
//     id_reserva: Math.floor(1000 + Math.random() * 9000),
//     id_cliente: "Juan Pérez",
//     id_habitacion: "201",
//     fecha_ckeck_in: "2025-11-02",
//     fecha_ckeck_out: "2025-11-05",
//     estado: "Confirmada",
//     total: "450000",
//   },
//   {
//     id_reserva: Math.floor(1000 + Math.random() * 9000),
//     id_cliente: "Laura Vílchez",
//     id_habitacion: "305",
//     fecha_ckeck_in: "2025-11-10",
//     fecha_ckeck_out: "2025-11-15",
//     estado: "Pendiente",
//     total: "600000",
//   },
//   {
//     id_reserva: Math.floor(1000 + Math.random() * 9000),
//     id_cliente: "Carlos Gómez",
//     id_habitacion: "410",
//     fecha_ckeck_in: "2025-12-01",
//     fecha_ckeck_out: "2025-12-03",
//     estado: "Cancelada",
//     total: "0",
//   },
// ];


// const [data, setData] = useState({
//   clientes: [] as Cliente[],
//   habitaciones: [] as Habitacion[],
// });
// const [reservas,setReservas] = useState({
//   reservasData : [] as reservas[]
// })






const data = useHuespedes()

const getBorderColor = (estado:string):string=> {
    switch (estado) {
      case "ocupando":
        return "#10B981";
      case "pendiente":
        return "#ED6C02 ";
      case "cancelada":
        return "red";
      default:
        return "grey.400";
    }
  };


  return (
    <Box
      sx={{
        p: 3,  
        width:"100%"   }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, borderBottom: "2px solid #e5e7eb", pb: 1 }}
      >
        Gestión de Reservas
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 4}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" fontWeight="600">
            Listado de Reservas
          </Typography>
         
          <Box sx={{background:"#1e2099ff",color:"white",display:"flex",alignItems:"center",padding:"2px"}}>
            <AddIcon />
           <ModalReserva  label="Nueva Reserva"  />
          </Box>
        </Box>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: "grey.100" }}>
              <TableRow>
                <TableCell># Reserva</TableCell>
                <TableCell>Huésped</TableCell>
                <TableCell>Hab.</TableCell>
                <TableCell>Llegada</TableCell>
                <TableCell>Salida</TableCell>
                <TableCell>Estado</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.slice().reverse().map((r:any) => (
                <TableRow key={r.id_reserva}>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.nombre}</TableCell>
                  <TableCell>{r.habitacion}</TableCell>
                  <TableCell>{r.checkIn}</TableCell>
                  <TableCell>{r.checkOut}</TableCell>
                  <TableCell>
                    <Chip
                    sx={{background:()=>getBorderColor(r.estado),color
                      :"white"
                    }}
                      label={r.estado}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <ModalReservaEdit label="ir" data={r}/>
                  
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ReservasRecepcion;
