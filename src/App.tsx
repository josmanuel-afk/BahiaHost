  import {  useContext, useEffect } from "react"
import { supaBase } from "./api/supabase/clienst"
import Routerapp from "./app/Routes/Routerapp"
import { UserContext } from "./shared/context/userContext";
import { useNavigate } from "react-router-dom";


  function App() {



  const {dispatch ,state} = useContext(UserContext);

const navigate = useNavigate()

useEffect(() => {
  const getUserAndClient = async () => {

      dispatch({ type: "SET_LOADING" });

    const { data: { session }  } = await supaBase.auth.getSession();
    const user = session?.user;

    if (!user) {
        dispatch({ type: "SET_CLIENTE", payload: null });
      return;
    }

    const { data: cliente,} = await supaBase
      .from("clientes")
      .select("*,roles(nombre_rol)")
      .eq("id_auth", user.id)
      .maybeSingle();      
      
          let { data: personal } = !cliente
            ? await supaBase
                .from("personal")
                .select("*, roles(nombre_rol)")
                .eq("id_auth", user.id)
                .maybeSingle()
            : { data: null };

            if (!cliente && !personal) {
            navigate("/unauthorized", { replace: true });
            return;
          }
          
 

        const usuario = cliente || personal

        dispatch({
      type: cliente ? "SET_CLIENTE" : "SET_PERSONAL",
      payload: usuario,
    });

  
  };

  getUserAndClient();

  const { data: listener } = supaBase.auth.onAuthStateChange(async (_, session) => {
    if (session?.user) {
      console.log("🔐 Usuario inició sesión -> cargar cliente");
      getUserAndClient();
    } else {
      console.log("🚪 Usuario salió -> limpiar estado");
      dispatch({ type: "SET_CLIENTE", payload: null });
      dispatch({ type: "SET_RESERVAS", payload: null });
    }
  });

  return () => listener.subscription.unsubscribe();
}, []);


  
useEffect(() => {
  if (state.cliente === undefined || state.cliente === null) {
    return 
  }  ;

  const fetchReservas = async () => {

    const { data: reservas, error } = await supaBase
      .from("reservas")
      .select(`id_reserva,id_cliente,id_habitacion,habitaciones(
        numero
        )`)
      .eq("id_cliente", state?.cliente?.id_cliente); 

    if (!error) {
      dispatch({ type: "SET_RESERVAS", payload: reservas[0]?? null });
    }else{
       dispatch({ type: "SET_RESERVAS", payload: null });
    }
  };

  fetchReservas();

}, [state.cliente]);




    return (
        <>
       <Routerapp />
  </> 
    )
  }

  export default App
