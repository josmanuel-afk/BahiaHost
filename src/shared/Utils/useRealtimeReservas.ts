// import { useEffect, useState } from "react";
// import { supaBase } from "../../api/supabase/clienst";


// export function useRealtimeReservas() {

//     const [realTime,setRealTime] = useState()

//   useEffect(() => {
//     const channel = supaBase
//       .channel("supabase_realtime")
//       .on(
//         "postgres_changes",
//         { event: "*", schema: "public", table: "reservas" },
//         (payload) => {
//           console.log("🔔 Cambio detectado:", payload);
//         //    setRealTime(payload)
//         }
//       )
//       .subscribe();

//     return () => {
//       supaBase.removeChannel(channel);
//     };
//   }, []);


// }
