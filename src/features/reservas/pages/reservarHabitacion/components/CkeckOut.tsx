import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import DatePickerComponent from "../../../components/DatePicker";
import type { categorias_habitacion, filtroTypes } from "../types/typesHabitacion";
import usefechData from "../../../../../shared/Utils/usefechData";
import { useEffect, useState } from "react";
import DialogErrorCkeck from "./DialogErrorCkeck";


const CkeckOut = ({ setFiltroHabitaciones, habitaciones,formData,setForm}: filtroTypes) => {


const [categorias_habitacion,setCategoriaHabitacion] = useState<categorias_habitacion[]>()

const { data, error } = usefechData("categorias_habitacion");

  const [open, setOpen] = useState(false);




  const filtrarHabitaciones = (habitacionSeleccionada:string)=>{

    if(formData.entrada === null || formData.salida === null || formData.habitaciones === ""){
      setOpen(true)
      return 
    }
    console.log("habitaciones seleccionada",habitacionSeleccionada)
    const habitacionesFiltradas = habitaciones.filter((item)=>
       item.categorias_habitacion.nombre === habitacionSeleccionada && item.estado === "disponible")
        setFiltroHabitaciones(habitacionesFiltradas)
  }



  useEffect(() => {
  
    if (error) {
       console.log("Error:", error);
      throw new Error(error)
    }

    setCategoriaHabitacion(data as unknown as categorias_habitacion[])
  }, [data, error]);


const opcionesHabiacion = categorias_habitacion?.map((cat)=>{
  return cat.nombre 
}) || []



  return (
    <div>
      <Box
        sx={{
          height: "200px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          marginTop: "75px",
          gap: "85px",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ marginLeft: "38px", color: "white" }}>
            Entrada
          </Typography>
          <DatePickerComponent
            value={formData.entrada}
            onChange={(newData) =>
              setForm((prev: any) => ({
                ...prev,
                entrada: newData,
              }))
            }
          />
        </Box>

        <Box>
          <Typography variant="h5" sx={{ marginLeft: "40px", color: "white" }}>
            Salida
          </Typography>
          <DatePickerComponent
            value={formData.salida}
            onChange={(newData) =>
              setForm((prev: any) => ({
                ...prev,
                salida: newData,
              }))
            }
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "45px",
          }}
        >
                      <Autocomplete
                  options={opcionesHabiacion}
                  onChange={(_, newdata) =>
                    setForm((data: any) => ({
                      ...data,
                      habitaciones: newdata,
                    }))
                  }
                  style={{
                    width: "355px",
                    marginTop: "38px",
                    border: "1px solid black",
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />

          
        

          <Button
            type="submit"
            sx={{
              width: "170px",
              height: "55px",
              fontSize: "15px",
              border: "1px solid black",
              background: "blue",
              position: "relative",
              top: "19px",
            }}
            variant="contained"
            color="secondary"
            onClick={()=>filtrarHabitaciones(formData.habitaciones)}
          >
            Buscar
          </Button>
        </Box>

        <Box sx={{ position: "relative", left: "55px", top: "10px" }}>
          {/* <Notificacion  nombre="buscar" descripcion="No Habitaciones Disponible" success="error" color="#FF0000"/> */}
        </Box>
      </Box>

      <DialogErrorCkeck open={open} setOpen={setOpen}/>
    </div>
  );
};

export default CkeckOut;
