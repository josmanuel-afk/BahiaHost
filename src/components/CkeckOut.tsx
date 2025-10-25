import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import DatePickerComponent from "./DatePicker";


const CkeckOut = () => {
      
      const [reserva, setReserva] = useState({
        entrada:"",
        salida:"",
        habitaciones: "",
      
      })


    const opcionHabitaciones= ["Habitacion Estandar","Habitacion Estandar Basica","Habitacion Doble","Habitacion Familiar","Suit"]

  return (
    <div>
         <Box sx={{height:"200px",width:"100%",display:"flex", justifyContent:"center",alignItems:"center",backgroundColor:"blue",marginTop:"75px",gap:"85px"}}> 

    <Box > 
    <Typography variant='h5' sx={{marginLeft:"38px",color:"white"}}>Entrada</Typography> 
      <DatePickerComponent />
    </Box>


    <Box  >
     <Typography variant='h5' sx={{marginLeft:"40px",color:"white"}}>Salida</Typography> 
             <DatePickerComponent />

    </Box>

    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:"45px"}}>
     <Autocomplete
      options={opcionHabitaciones}
      onChange={(newdata)=>setReserva((data)=>({
       ...data,
       habitaciones: "pp"
      }))}
      style={{width:"355px",marginTop:"38px",border:"1px solid black" }}
     renderInput={(params)=> <TextField {...params}/>}
     
     />

     <Button type='submit'  sx={{width:"170px",height:"55px",fontSize:"15px",border:"1px solid black",background:"blue",position:"relative",top:"19px"}}variant='contained' color='secondary'>Buscar</Button>

    </Box>




       <Box   sx={{ position:"relative",left:"55px",top:"10px"}}> 
       {/* <Notificacion  nombre="buscar" descripcion="No Habitaciones Disponible" success="error" color="#FF0000"/> */}

      </Box> 


  </Box>
      
    </div>
  )
}

export default CkeckOut
