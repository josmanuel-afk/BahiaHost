import {
  Box,
  Button,
  Card,
  Chip,
  Fade,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import usefechData from "../../../shared/Utils/usefechData";
import { useEffect, useState } from "react";
import type { Personal } from "../types/types";
import useForm from "../../../shared/hooks/useForm";
import { getBorderColor } from "../utils/getColors";
import { supaBase } from "../../../api/supabase/clienst";
import { Tune } from "@mui/icons-material";

interface DetallesHabitacionProps {
  handleClose: () => void;
  data: any;
}

interface personalTypes {
  active: boolean;
  index: number;
  data: any;
}

interface infoPersonal {
  apellido: "";
  cargo: "";
  email: "";
  id_personal: number;
  id_rol: number;
  nombre: "";
  telefono: "";
}
const InitialState = {
  estado: "",
  area: "",
  observaciones: "",
};

const DetallesHabitaciones = ({
  handleClose,
  data,
}: DetallesHabitacionProps) => {

  const [personal, setpersonal] = useState<Personal[] | null>(null);
  const [active, setActive] = useState<personalTypes>();
    const [face, setFade] = useState<boolean>(false);

  const [infoPersonal, setInfoPersonal] = useState<infoPersonal>();

  const { formData, handleChange } = useForm(InitialState);

  const { data: personalData, error: errorPersonal } = usefechData("personal");

  useEffect(() => {
    if (errorPersonal) {
      throw new Error(errorPersonal);
    }

    setpersonal(personalData as Personal[]);
  }, [errorPersonal, personalData]);

  const handleInfoPersonal = (data: any, index: number) => {
    setActive({ active: true, index: index, data });
    setInfoPersonal(data);  };

  const UpdateHabitacion = async (estado: string) => {
    if (estado !== "disponible") return handleClose();



    const habitacionPersonal = {
      id_habitacion: data[0].id_habitacion,
      id_personal: infoPersonal?.id_personal,
      tipo_tarea: formData.area,
      fecha: new Date().toISOString(),
      observaciones: formData.observaciones || "",
      estado:"activo"
    };

    try {
      const { error: errorHabitacionPersonal } = await supaBase
        .from("habitacion_personal")
        .insert([habitacionPersonal]);

      if (errorHabitacionPersonal) {
        console.error(
          "Error insert habitacion_personal:",
          errorHabitacionPersonal.message
        );
        return;
      }

      const { error: errorHabitacion } = await supaBase
        .from("habitaciones")
        .update({ estado: formData.estado })
        .eq("id_habitacion", data[0].id_habitacion);

      if (errorHabitacion) {
        console.error("Error update habitaciones:", errorHabitacion.message);
        return;
      }
      console.log("hechooo");

      handleClose();
    } catch (error) {
      console.error("Error al actualizar habitación:", error);
    }
  };



  setTimeout(()=>{
setFade(true)

  },400)


  return (
    <Fade in={face}>
      <Box
        maxWidth={500}
        width="100%"
        sx={{ margin: "20px auto", transition: "all 1s ease" }}
      >
        {data?.map((item: any) => (
          <>
            <Card
              sx={{
                borderTop: `4px solid ${"#4f46e5"}`,
                borderRadius: 3,
                boxShadow: 6,
                p: 3,
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-start"
                mb={2}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Typography
                    variant="h2"
                    fontWeight="extrabold"
                    color={"#4f46e5"}
                    lineHeight={1}
                  >
                    {item.numero}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="semibold"
                    color="text.secondary"
                    mt={1}
                  >
                    Habitación
                  </Typography>
                </Box>

                <Chip
                  label={item.estado}
                  sx={{
                    bgcolor: () => getBorderColor(item.estado),
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    boxShadow: 3,
                    px: 1.5,
                    py: 0.5,
                  }}
                />
              </Box>

              <Box mb={2} pb={2} borderBottom="1px solid #e5e7eb">
                <Typography variant="body2" color="text.secondary">
                  <strong>ID Interno:</strong> {item.id_habitacion}
                </Typography>
              </Box>

              {item.estado === "disponible" ? (
                <>
                  <Typography variant="h5" fontWeight="bold" mb={3}>
                    Gestionar Habitacion
                  </Typography>
                  <Box component={"form"} mb={2}>
                    <Grid container spacing={2} mb={5}>
                      <Grid size={12}>
                        <FormControl fullWidth>
                          <InputLabel>Estado</InputLabel>
                          <Select
                            name="estado"
                            label="Estado"
                            required
                            value={formData.estado}
                            onChange={handleChange}
                          >
                            <MenuItem value="mantenimiento">
                              Mantenimiento
                            </MenuItem>
                            <MenuItem value="limpieza">Limpieza</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid size={6}>
                        <TextField
                          type="text"
                          name="area"
                          onChange={handleChange}
                          placeholder="Tipo de area"
                        ></TextField>
                      </Grid>
                      <Grid size={6}>
                        <TextField
                          type="text"
                          name="observaciones"
                          onChange={handleChange}
                          placeholder="observasiones"
                        ></TextField>
                      </Grid>
                    </Grid>

                    <Typography
                      borderTop="1px solid #e5e7eb"
                      mb={3}
                      paddingTop={3}
                    >
                      Personal Disponible
                    </Typography>

                    <Grid container spacing={2}>
                      {personal?.map((personal, index) => (
                        <Grid
                          size={12}
                          sx={{
                            backgroundColor: "#f6f6f6ff",
                            border:
                              index === active?.index && active.active
                                ? "1px solid "
                                : "1px solid white",
                            padding: "10px",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>
                            <Typography variant="body1">
                              {personal.nombre} {personal.apellido}
                            </Typography>
                            <Typography variant="body2" color="#6B7280">
                              Cargo: {personal.cargo}
                            </Typography>
                          </Box>

                          <Typography
                            onClick={() => handleInfoPersonal(personal, index)}
                            color="green"
                            sx={{ cursor: "pointer" }}
                          >
                            Asignar
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </>
              ) : (
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                    Detalles de Reservas
                  </Typography>

                  <Box mt={2} display="flex" flexDirection="column" gap={1}>
                    <Box pt={1} mt={1} borderTop="1px solid #e5e7eb">
                      {item.reservas?.map((r: any) => (
                        <Box key={r.id_reserva}>
                          <Typography
                            variant="caption"
                            fontWeight="bold"
                            color={"#4f46e5"}
                            mb={0.5}
                          >
                            Reserva {r.id_reserva}
                          </Typography>
                          <Typography variant="body2" color="text.primary">
                            <strong>Cliente:</strong> {r.clientes?.nombre}{" "}
                            {r.clientes?.apellido}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>Email:</strong> {r.clientes?.email}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              )}

              {(item.estado === "limpieza" ||
                item.estado === "mantenimiento") && (
                <>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: "#EEF2FF",
                      bgcolorOpacity: 0.1,
                      borderRadius: "12px",
                    }}
                  >
                    <Typography
                      variant="h5"
                      fontWeight="extrabold"
                      color="primary.dark"
                    >
                      Detalles del Personal
                    </Typography>
                    <Typography variant="body2" color="primary.main" mt={0.5}>
                      Habitación Personal Asignada
                    </Typography>
                  </Box>

                  {item.habitacion_personal.map((hab: any) => (
                    <>
                      {hab.estado === "activo" && (
                        <Box sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              py: 1,
                              borderBottom: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              Nombre Completo
                            </Typography>
                            <Typography variant="body1" fontWeight={600}>
                              {hab.personal.nombre} {hab.personal.apellido}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              py: 1,
                              borderBottom: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              Cargo
                            </Typography>
                            <Typography variant="body1" fontWeight={600}>
                              {hab.personal.cargo}
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              py: 1,
                              borderBottom: "1px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              Tipo de Tarea
                            </Typography>
                            <Chip
                              label={hab.tipo_tarea}
                              size="small"
                              color="success"
                              variant="outlined"
                              sx={{
                                fontWeight: 500,
                                bgcolor: "#DCFCE7",
                                color: "success.main",
                                px: 1,
                                borderRadius: "999px",
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              pt: 2,
                              mt: 2,
                              borderTop: "2px solid",
                              borderColor: "divider",
                            }}
                          >
                            <Typography
                              variant="subtitle1"
                              fontWeight={600}
                              color="text.primary"
                              mb={1}
                            >
                              Observaciones
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                fontStyle: "italic",
                                bgcolor: "grey.50",
                                p: 2,
                                border: "1px solid",
                                borderColor: "grey.200",
                                borderRadius: 2,
                              }}
                            >
                              {hab.observaciones}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </>
                  ))}
                </>
              )}

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: "#4f46e5",
                  "&:hover": { bgcolor: "#4338ca" },
                  py: 1.5,
                  fontWeight: "bold",
                  boxShadow: 3,
                }}
                onClick={() => UpdateHabitacion(item.estado)}
              >
                Gestionar Habitación {item.numero}
              </Button>
            </Card>
          </>
        ))}
      </Box>
    </Fade>
  );
};

export default DetallesHabitaciones;
