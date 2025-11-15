import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({onClick}: {onClick: () => void}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    onClick();
  };

  const handleClose = ( )=> {
    setOpen(false);
  }
  

  const action = (
    <React.Fragment>
      <Button color="success" size="small" onClick={handleClose}>
        Cerrar
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}
        variant="contained"
          fullWidth
          sx={{ mt: 3, py: 1.5, fontWeight: "bold" }}
      >Confirmar Rerserva</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Reserva Confirmada"
        action={action}
       slotProps={{
    content: {
      sx: {
        backgroundColor: 'success.main',
        color: '#fff',
        fontWeight: 'bold',
      }
    }
  }}
      />
    </div>
  );
}