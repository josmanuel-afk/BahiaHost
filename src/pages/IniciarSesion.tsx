import { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CustomAppBar from "../layouts/CustomAppBar";
import useForm from "../shared/hooks/useForm";
import { supaBase } from "../api/supabase/clienst";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../shared/context/userContext";


const initialForm = {
  nombre: "",
  apellido: "",
  documento_identidad: "",
  telefono: "",
  email: "",
  fecha_registro: new Date(),
  password: "",
};

export default function IniciarSesion() {
  const [view, setView] = useState("login");
  const { formData, handleChange } = useForm(initialForm);
  const navigate = useNavigate();

  const {  dispatch } = useContext(UserContext);

  const handleViewChange = (_: any, newView: any) => {
    if (newView) setView(newView);
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      const { data, error: authError } = await supaBase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      let user = data.user;
  
      if (!data.session) {
        const { data: loginData, error: loginErr } =
          await supaBase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password,
          });

        if (loginErr) throw loginErr;
        user = loginData.user;
      }

      const { error: dbError } = await supaBase.from("clientes").insert([
        {
          id_auth: user?.id,
          nombre: formData.nombre,
          apellido: formData.apellido,
          documento_identidad: formData.documento_identidad,
          telefono: formData.telefono,
          email: formData.email,
          id_rol:4
        },
      ]);

      if (dbError) throw dbError;

      navigate("/");
    } catch (err) {
      console.error("❌ Error al registrar:", err);
    }
  };



  const signIN = async (e:any) => {
      e.preventDefault();

    try {
      const { data, error } = await supaBase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      const { data: cliente } = await supaBase
        .from("clientes")
        .select("*, roles(nombre_rol)")
        .eq("id_auth", data.user.id)
        .single();

      

         let { data: personal } = !cliente
      ? await supaBase
          .from("personal")
          .select("*, roles(nombre_rol)")
          .eq("id_auth", data.user.id)
          .maybeSingle()
      : { data: null };

       if (!cliente && !personal) {
      navigate("/unauthorized", { replace: true });
      return;
    }
    
        const usuario = cliente || personal

        console.log(usuario,"usuarios")

        dispatch({
      type: cliente ? "SET_CLIENTE" : "SET_PERSONAL",
      payload: usuario,
    });

        const rol = usuario?.roles?.nombre_rol.trim().toLowerCase();

        console.log(rol,"rol")
     
      switch (rol) {
        case "admin":
          navigate("/recepcion", { replace: true });
          break;
        case "cliente":
          navigate("/", { replace: true });
          break;
        case "limpieza":
          navigate("/personal", { replace: true });
          break;
        case "mantenimiento":
          navigate("/personal", { replace: true });
          break;
        default:
          navigate("/unauthorized", { replace: true });
          break;
      }

    } catch (e) {
      console.error("Error al iniciar sesión:", e);
    }
  };




  

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 480,
        margin: "auto",
        mt: 5,
        p: 2,
      }}
    >
      <CustomAppBar />

      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, mt: 5 }}>
        <ToggleButtonGroup
          value={view}
          exclusive
          fullWidth
          sx={{ mb: 3 }}
          onChange={handleViewChange}
        >
          <ToggleButton value="login">Iniciar Sesión</ToggleButton>
          <ToggleButton value="register">Registrarse</ToggleButton>
        </ToggleButtonGroup>

        {view === "login" && (
          <>
            <Typography variant="h5" align="center" mb={3}>
              Iniciar Sesión
            </Typography>

            <Box component="form" noValidate>
              <TextField
                label="Correo Electrónico"
                fullWidth
                required
                sx={{ mb: 2 }}
                value={formData.email}
                name="email"
                onChange={handleChange}
              />

              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                required
                value={formData.password}
                name="password"
                onChange={handleChange}
                sx={{ mb: 3 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                onClick={signIN}
              >
                Acceder
              </Button>
            </Box>
          </>
        )}

        {view === "register" && (
          <>
            <Typography variant="h5" align="center" mb={3}>
              Crear Cuenta
            </Typography>

            <Box component="form" noValidate>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    value={formData.nombre}
                    name="nombre"
                    label="Nombre"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    value={formData.apellido}
                    name="apellido"
                    label="Apellido"
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    value={formData.email}
                    name="email"
                    label="Email"
                    type="email"
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ mt: 2 }}
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    value={formData.password}
                    name="password"
                    label="Contraseña"
                    type="password"
                    onChange={handleChange}
                    fullWidth
                    required
                    sx={{ mt: 2 }}
                  />
                </Grid>
              </Grid>

              <TextField
                name="telefono"
                value={formData.telefono}
                label="Teléfono"
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: 2 }}
              />

              <TextField
                name="documento_identidad"
                value={formData.documento_identidad}
                label="Documento de Identidad (Usuario)"
                onChange={handleChange}
                fullWidth
                required
                sx={{ mt: 2 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleRegister}
              >
                Registrar
                {/* {loadingRegister ? <CircularProgress size={24} /> : "Registrar"} */}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Box>
  );
}
