import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from 'react-router-dom';


interface DialogConfirmacionProps {
    open:boolean,
    setOpen:(value:boolean)=> void
}

const DialogConfirmacion = ({open,setOpen}:DialogConfirmacionProps) => {


  const navigate = useNavigate()

  const close=()=>{
     setOpen(false)
     navigate("/")
     
  }

  return (
        <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle textAlign="center">
          <CheckCircleIcon color="success" sx={{ fontSize: 50, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            ¡Reserva Confirmada!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" color="text.secondary">
            Hemos reservado su estancia. Recibirá un correo con los detalles.
            <br />
            <strong>Recuerde pagar al llegar.</strong>
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={close}
            sx={{ borderRadius: 2, px: 4 }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

  )
}

export default DialogConfirmacion
