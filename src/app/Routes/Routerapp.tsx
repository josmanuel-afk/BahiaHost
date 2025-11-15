import {Route, Routes } from "react-router-dom"


import ScrollToTop from "../../shared/components/ScrollToTop";
import AdminRouter from "./AdminRouter";
import GeneralRouter from "./GeneralRouter";
import ProtectedRoute from "./ProtectedRoute";
import IniciarSesion from "../../pages/IniciarSesion";
import HomePesonal from "../../features/personal/pages/HomePesonal";
import UnauthorizedPage from "../../pages/UnauthorizedPage";


const Routerapp = () => {
  return (

    <> 
       <ScrollToTop/>
    <Routes>

      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route path="/recepcion/*" element={<AdminRouter/> }/>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={[]} />}>
             <Route path="/*" element={<GeneralRouter/>}/>
        </Route>
          
          <Route element={<ProtectedRoute allowedRoles={['limpieza']} />} >
              <Route path="/personal" element={<HomePesonal/>}></Route>
          </Route>
            
        

        <Route path="/iniciarsesion" element={<IniciarSesion/>}></Route>

         <Route path="/unauthorized" element={<UnauthorizedPage/>}></Route>
    </Routes>

    </>
  
  )
}

export default Routerapp
