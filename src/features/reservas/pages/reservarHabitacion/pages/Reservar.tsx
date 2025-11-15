import img1_galeria from   "../../../../../assets/img/img1-galeria.webp"
import img2_galeria from "../../../../../assets/img/img-2-galeria.jpg"
import img3_galeria from "../../../../../assets/img/img-3-galeria.jpg"
import img4_galeria from "../../../../../assets/img/img-4-galeria.jpg"
import img5_galeria from "../../../../../assets/img/img-5-galeria.jpg"
import { Box } from '@mui/material'
import {useEffect, useState } from "react"
import CustomAppBar from "../../../../../layouts/CustomAppBar"
import Habitaciones from "../components/Habitaciones"
import CheckOut from "../components/CkeckOut"
import type {  Habitacion } from "../types/typesHabitacion"
import { supaBase } from "../../../../../api/supabase/clienst"
import type { Dayjs } from "dayjs"
import useForm from "../../../../../shared/hooks/useForm"


const img = [img2_galeria, img1_galeria,img3_galeria,img4_galeria,img5_galeria]

// const cards_camas = [
//   {
//     img: cama_doble,
//     nombre: "Habitacion Estandar",
//     piso: "201",
//     capacidad: "2 persona",
//     precio: "250.000",
//     camas: "2 cama individual",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_sencilla,
//     nombre: "Habitacion Estandar Basica",
//     piso: "202",
//     capacidad: "1 personas",
//     precio: "150.000",
//     camas: "1 camas individuales",
//     disponible: 2,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_doble,
//     nombre: "Habitacion Estandar",
//     piso: "203",
//     capacidad: "2 persona",
//     precio: "250.000",
//     camas: "2 cama individual",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "204",
//     capacidad: "2 personas",
//     precio: "300.000",
//     camas: "2 camas individuales",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_doble,
//     nombre: "Habitacion Estandar",
//     piso: "205",
//     capacidad: "2 personas",
//     precio: "250.000",
//     camas: "1 camas individuales",
//     disponible: 5,
//     disponibleCuarto: false,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     piso: "206",
//     precio: "350.000",
//     camas: "2 camas Individuales ",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "301",
//     capacidad: "2 personas",
//     precio: "300.000",
//     camas: "2 camas individuales",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "302",
//     capacidad: "2 persona",
//     precio: "300.000",
//     camas: "2 cama individual",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_doble,
//     nombre: "Habitacion Estandar",
//     piso: "303",
//     capacidad: "1 personas",
//     precio: "150.000",
//     camas: "1 camas individuales",
//     disponible: 5,
//     disponibleCuarto: false,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "304",
//     capacidad: "2 personas",
//     precio: "300.000",
//     camas: "2 camas individuales",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "305",
//     precio: "300.000",
//     camas: "2 camas individuales",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     capacidad: "3 personas",
//     piso: "306",
//     precio: "300.000",
//     camas: "2 camas individuales",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     piso: "401",
//     capacidad: "3 persona",
//     precio: "300.000",
//     camas: "2 cama individual",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     piso: "402",
//     capacidad: "3 persona",
//     precio: "300.000",
//     camas: "2 cama individual",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_doble,
//     nombre: "Habitacion Estandar",
//     piso: "403",
//     capacidad: "2 personas",
//     precio: "250.000",
//     camas: "1 camas individuales",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas,
//     nombre: "Habitacion Doble",
//     piso: "404",
//     precio: "250.000",
//     camas: "2 camas individual",
//     disponible: 5,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     piso: "405",
//     capacidad: "3 persona",
//     precio: "300.000",
//     camas: "2 cama individual",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_separadas_doble,
//     nombre: "Habitacion Familiar",
//     piso: "406",
//     capacidad: "3 persona",
//     precio: "300.000",
//     camas: "2 cama individual",
//     disponible: 6,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_suit,
//     nombre: "Suit",
//     piso: "501",
//     precio: "500.000",
//     camas: "cama Matrimonial",
//     disponible: 3,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_suit,
//     nombre: "Suit",
//     piso: "502",
//     precio: "500.000",
//     camas: "cama Matrimonial",
//     disponible: 3,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
//   {
//     img: cama_suit,
//     nombre: "Suit",
//     piso: "503",
//     precio: "500.000",
//     camas: "cama Matrimonial",
//     disponible: 3,
//     disponibleCuarto: true,
//     limpieza: false,
//   },
// ];


const initialStateReserva: {
  entrada: Dayjs | null;
  salida: Dayjs | null;
  habitaciones: string;
} = {
  entrada:null,
  salida: null,
  habitaciones: "",
};



function Reservar() {

const[filtroHabitaciones,setFiltroHabitaciones] =useState<Habitacion[]>([])
const [habitaciones,setHabitaciones] = useState<Habitacion[]>([])

const { formData, setForm } = useForm(initialStateReserva);


useEffect(()=>{
  
const FetchHabitaciones= async()=>{
  
      const { error,data } = await supaBase
        .from('habitaciones')
        .select("*,categorias_habitacion(nombre,precio,capacidad,img)")
        .not("estado", "in", '("limpieza","mantenimiento","ocupada")') 


        if(error){
          console.log(error,"error")
        }

        setHabitaciones(data as Habitacion[])
        setFiltroHabitaciones (data as Habitacion[])

}


FetchHabitaciones()
  

},[])




  return (
   
    
      <Box className='Reservas' sx={{backgroundColor:"#f1f3f6ff"}}>
        <CustomAppBar/>
        <CheckOut setFiltroHabitaciones={setFiltroHabitaciones} habitaciones={habitaciones} formData={formData} setForm={setForm}/>

       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"5px",marginTop:"45px",marginBottom:"45px"}}>
        {
          img.map((item)=>((
            <div className='galeria'> 
            <img src={item} style={{width:"400px" ,height:"300px",objectFit:"cover",borderRadius:"15px"}}/>
            </div>


   
          )))
        }
       </Box>


         <Habitaciones formData={formData}  habitaciones={filtroHabitaciones}/>
   
         
      </Box>  


    
      
  )
}



export default Reservar