import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { HabitacionPersonalProp } from "../types/typesPesonal";
import useForm from "../../../shared/hooks/useForm";
import { supaBase } from "../../../api/supabase/clienst";

interface ModalPersonalProps {
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
  hab: HabitacionPersonalProp | null;
}

const initialState = {
  estado: "",
  observacion: "",
};

const ModalPersonal = ({
  modalOpen,
  setModalOpen,
  hab,
}: ModalPersonalProps) => {
  
  const handlerclose = () => {
    setModalOpen(false);
  };

  const { formData, handleChange } = useForm(initialState);

 const UpdateHabitacion_personal = async () => {
  if (!hab?.habitaciones?.id_habitacion || !hab?.id_habitacion_personal) {
    throw new Error("Faltan datos de la habitación o del registro personal.");
  }

  try {
    const { error: errorHab } = await supaBase
      .from("habitaciones")
      .update({ estado: formData.estado })
      .eq("id_habitacion", hab.habitaciones.id_habitacion);

    if (errorHab) {
      console.error("Error al actualizar habitaciones:", errorHab.message);
      throw new Error("No se pudo actualizar el estado de la habitación.");
    }

    const { error: errorHP } = await supaBase
      .from("habitacion_personal")
      .update({ estado: "finalizado",observaciones_personal:formData.observacion })
      .eq("id_habitacion_personal", hab.id_habitacion_personal);


      if(!errorHP && !errorHab){
           handlerclose()
      }
  } catch (err: any) {
    console.error("UpdateHabitacion_personal error:", err.message);
    throw err;
  }
};

  return (
    <Modal open={modalOpen} onClose={handlerclose}>
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 500 },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          p: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Editar Estado de Habitación
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Habitación"
            InputProps={{ readOnly: true }}
            value={hab?.habitaciones.numero}
            disabled
          />
          <TextField
            name={"estado"}
            select
            label="Cambiar Estado"
            value={formData.estado}
            onChange={handleChange}
          >
            <MenuItem value="disponible">Disponible</MenuItem>
            <MenuItem value="mantenimiento">Mantenimiento</MenuItem>
          </TextField>
          <TextField
            name="observacion"
            label="Observación"
            multiline
            rows={3}
            value={formData.observacion}
            onChange={handleChange}
          />

          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={handlerclose}>
              Cancelar
            </Button>
            <Button variant="contained" color="success" onClick={UpdateHabitacion_personal}>
              Guardar Cambios
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ModalPersonal;
