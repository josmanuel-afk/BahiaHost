
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DatePickerComponent from '../../features/reservas/components/DatePicker';
import  { Dayjs } from 'dayjs';


interface PopoverCustomProps {
  label: string;
  value: Dayjs  | null;
  onChange: (value: Dayjs | null) => void;
  onClick: () => void;

}

export default function PopoverCustom({label,value,onChange,onClick}:PopoverCustomProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onClick()
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? '' : undefined;



  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {value !== null? value.format("YYYY-MM-DD HH:mm") : label }
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
       <DatePickerComponent  
       value={value}
            onChange={(newValue) => {
            onChange(newValue);
          }}
           showTime={true}/>
      </Popover>
    </div>
  );
}