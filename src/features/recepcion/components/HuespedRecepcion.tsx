import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Chip,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { useHuespedes } from "./useHuespedes";
import ModalCliente from "./ModalCliente";
import { useEffect, useState } from "react";
import type { Huesped } from "../types/types";


function HuespedRecepcion() {




const data = useHuespedes() 


const getBorderColor = (estado:string):string=> {
    switch (estado) {
      case "disponible":
        return "#10B981";
      case "ocupando":
        return "#4F46E5";
      case "pendiente":
        return "#ED6C02 ";
      case "cancelada":
        return "red";
      default:
        return "grey.400";
    }
  };




  const [query, setQuery] = useState("");      
  const [resultados, setResultados] = useState<Huesped[]>([]); 


useEffect(() => {
  setResultados(data);
}, [data]);

  useEffect(() => {

    const filter = data.filter(item =>
      item.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(filter);
  }, [query, data]);


  
  return (
    <Box sx={{p: 3, width: "100%" }}>
      

      <Box sx={{textAlign:"end"}}>
           <ModalCliente/>
      </Box>

    
      <Typography
        variant="h4"
        fontWeight="bold"
        color="text.primary"
        mb={3}
        sx={{ borderBottom: "1px solid #e0e0e0", pb: 1 }}
      >
        Huéspedes
      </Typography>

      <Box
        sx={{ backgroundColor: "white", p: 4, borderRadius: 3, boxShadow: 3 }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}  
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="h6" fontWeight="600">
            Huéspedes Activos
          </Typography>
          <TextField
            size="small"
            placeholder="Buscar huésped..."
             onChange={(e) => setQuery(e.target.value)}
            sx={{ width: { xs: "100%", sm: "250px" } }}
            value={query}
          />
        </Box>

        <List>
          {resultados?.slice().reverse().map((item, index) => (
            
            <ListItem
              key={index}
              sx={{
                borderBottom: "1px solid #f0f0f0",
                py: 2,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box display="flex" alignItems="center">
                <Avatar sx={{ bgcolor: "grey.200", mr: 2 }}>
                  <Person sx={{ color: "grey.600" }} />
                </Avatar>
                <ListItemText
                  primary={
                    <Typography fontWeight="medium" color="text.primary">
                      {item.nombre}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {item.habitacion} | checkIn {item.checkIn} | checkOut {item.checkOut}
                    </Typography>
                  }
                />
              </Box>


              <Chip
                    sx={{background:()=>getBorderColor(item.estado),color
                      :"white"
                    }}
                      label={item.estado}
                      size="small"
                    />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default HuespedRecepcion;
