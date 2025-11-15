import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState, } from 'react';
import EditRerservas from './EditRerservas';



interface ModalRerservaEdit {
    label: string
    data:any
}


export default function ModalReservaEdit({label,data}:ModalRerservaEdit) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}  sx={{color:"red"}}>{label}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
         <EditRerservas handleClose={handleClose} data={data}/>
      </Modal>
    </div>
  );
}