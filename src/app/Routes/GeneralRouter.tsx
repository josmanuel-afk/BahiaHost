import { Route, Routes } from 'react-router-dom'
import Reservar from '../../features/reservas/pages/reservarHabitacion/pages/Reservar'
import ReservarGym from '../../features/reservas/pages/reservarGym/ReservarGym'
import ReservarSpa from '../../features/reservas/pages/reservarSpa/ReservarSpa'
import ConfirmarReserva from '../../features/reservas/pages/reservarHabitacion/pages/ConfirmarReserva'
import { Home } from '../../features/home'
import LayoutGeneral from '../../layouts/LayoutGeneral '


const GeneralRouter = () => {
  return (

    <>
    <Routes>
           <Route element={<LayoutGeneral/>}>
              <Route index element={<Home/>}></Route>
              <Route path="/reservar" element={<Reservar/>}></Route>
              <Route path="/reservargym" element={<ReservarGym/>}></Route>
              <Route path="/reservarspa" element={<ReservarSpa/>}></Route>
              <Route path="/confirmarreserva" element={<ConfirmarReserva/>}></Route>
            </Route>
    </Routes> 
    </>
   
  )
}

export default GeneralRouter