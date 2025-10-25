import {Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Reservar from "../pages/reservar"
import Footer from "../components/Footer"
import ReservarGym from "../pages/ReservarGym"
import Recepcion from "../pages/Recepcion"
import ReservasRecepcion from "../components/Recepcion/ReservasRecepcion"
import HabitacionRecepcion from "../components/Recepcion/HabitacionRecepcion"
import ReportesRecepcion from "../components/Recepcion/ReportesRecepcion"
import HuespedRecepcion from "../components/Recepcion/HuespedRecepcion"
import DashboardRecepcion from "../components/Recepcion/DashboardRecepcion"
import ReservarSpa from "../pages/ReservarSpa"

const Routerapp = () => {

    const isReceptionRoute = location.pathname.startsWith('/recepcion');



  return (

    <> 
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reservar" element={<Reservar/>}></Route>
        <Route path="/reservargym" element={<ReservarGym/>}></Route>
        <Route path="/reservarspa" element={<ReservarSpa/>}></Route>
    </Routes>

    <Routes>
       <Route path="/recepcion" element={<Recepcion/>}>
            <Route  index element={<DashboardRecepcion/>}/>
           <Route  path="reservas" element={<ReservasRecepcion/>}/>
            <Route  path="Habitaciones" element={<HabitacionRecepcion/>}/>
            <Route  path="Huesped" element={<HuespedRecepcion/>}/>
            <Route  path="Reportes" element={<ReportesRecepcion/>}/>
       </Route>
    </Routes>

       {!isReceptionRoute && <Footer />}
    </>
    
    
  )
}

export default Routerapp
