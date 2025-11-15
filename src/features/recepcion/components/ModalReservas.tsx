import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState, } from 'react';
import NuevaReservas from './NuevaReserva';


export default function ModalReserva({label}:{label:string}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{color:"white"}}>{label}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
         <NuevaReservas handleClose={handleClose}/>

      </Modal>
    </div>
  );
}