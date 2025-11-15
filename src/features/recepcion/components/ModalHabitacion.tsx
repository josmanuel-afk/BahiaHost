import Modal from '@mui/material/Modal';
import DetallesHabitaciones from './DetallesHabitaciones';



interface ModalRerservaEdit {
    data:any,
    open:boolean
    handleClose: () => void;

}


export default function ModalHabitacion({handleClose,data,open}:ModalRerservaEdit) {

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus
      >
         <DetallesHabitaciones handleClose={handleClose} data={data}/>
      </Modal>
    </div>
  );
}