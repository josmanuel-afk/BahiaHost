import { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
} from "@mui/material";
import useForm from "../../../shared/hooks/useForm";
import { supaBase } from "../../../api/supabase/clienst";
import { RecepcionContext } from "../context/RecepcionContext";
import type { Cliente } from "../types/types";




export default function ModalCliente() {



  const [open, setOpen] = useState(false);
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const initialState={
    nombre:"",
    apellido:"",
    telefono:"",
    documento_identidad:"",
    email:"",
    fecha_registro: new Date().toISOString(),
    id_auth:null,
    id_rol:4,
    password:""

  }
 const{formData,handleChange,resetForm} = useForm(initialState)

const {clientes} = useContext(RecepcionContext)

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
  
    const{password,...clienteData} = formData
    
    const { data:cliente,error:errorCliente } = await supaBase
      .from("clientes") 
      .insert([clienteData])
      .select()

    const clienteInserted = cliente?.[0];
    console.error(clienteInserted)

    if (!clienteInserted) {
  throw new Error("No se pudo obtener el cliente insertado");
}

    if (errorCliente) throw errorCliente;

        const { data, error: authError } = await supaBase.auth.signUp({
            email: formData.email,
            password: formData.password,
        });

      if (authError) throw authError;
         
      

      const {error:errorUpdateCliente} =  await supaBase
                .from("clientes")
                .update({id_auth:data?.user?.id})
                 .eq("id_cliente", clienteInserted.id_cliente)


      if(errorUpdateCliente) throw errorUpdateCliente



        resetForm()
         await clientes.refresh()

        handleClose();
  } catch (err: any) {
    console.error("Error guardando cliente:", err.message);
    alert("No se pudo guardar el cliente: " + err.message);
  }
};


  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        
      >
        Agregar Nuevo Cliente
      </Button>

      <Dialog open={open} onClose={handleClose}  fullWidth>
        <DialogTitle>Agregar Nuevo Cliente</DialogTitle>

        <DialogContent >
          <form id="client-form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid size={6}>
                <TextField
                  label="Apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  label="Documento de Identidad"
                  name="documento_identidad"
                  value={formData.documento_identidad}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  label="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>

               <Grid size={6}>
                <TextField
                  label="password"
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleClose} color="inherit">
            Cancelar
          </Button>
          <Button type="submit" form="client-form" variant="contained" color="primary">
            Crear    Cliente
          </Button>
        </DialogActions>


      </Dialog>
    </>
  );
}
