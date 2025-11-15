import { Route, Routes } from 'react-router-dom'
import Recepcion from '../../features/recepcion/pages/Recepcion'
import ReservasRecepcion from '../../features/recepcion/components/ReservasRecepcion'
import HabitacionesRecepcion from '../../features/recepcion/components/HabitacionRecepcion'
import HuespedRecepcion from '../../features/recepcion/components/HuespedRecepcion'


const AdminRouter = () => {
  return (

    <>

      <Routes>
            <Route path="/" element={<Recepcion/>}>
                  {/* <Route  index element={<DashboardRecepcion/>}/> */}
                    <Route index element={<ReservasRecepcion/>}/>
                    <Route  path="Habitaciones" element={<HabitacionesRecepcion/>}/>
                    <Route  path="Huesped" element={<HuespedRecepcion/>}/>            </Route>
      </Routes>
  

    </>
   
  )
}

export default AdminRouter