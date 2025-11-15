import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import ErrorIcon from "@mui/icons-material/Error";


interface DialogConfirmacionProps {
    open:boolean,
    setOpen:(value:boolean)=> void
}

const DialogErrorCkeck = ({open,setOpen}:DialogConfirmacionProps) => {

  return (
        <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle textAlign="center">
        <ErrorIcon color="error" sx={{ fontSize: 50, mb: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            ¡Error filtro ,Fechas Invalidad o habitaciones no disponible!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography align="center" color="text.secondary">
           Ingresar fechas o habitacion disponible
            <br />
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(false)}
            sx={{ borderRadius: 2, px: 4 }}
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

  )
}

export default DialogErrorCkeck
