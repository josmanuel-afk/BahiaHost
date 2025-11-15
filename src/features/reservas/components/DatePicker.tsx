
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker } from '@mui/x-date-pickers';
import type { Dayjs } from 'dayjs';



interface DatePickerCustomProps {
  label?: string;
  showTime?: boolean;
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void;
}

export default function DatePickerComponent({ label,
  showTime = false,
  value,
  onChange,
}:DatePickerCustomProps) {



  return (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
      {showTime ? (
        <DateTimePicker
          value={value}
          onChange={onChange}
          label={label}
          views={["year", "month", "day", "hours", "minutes"]} />
      ) : (
        <DatePicker
          value={value}
          onChange={onChange}
          views={["year", "month", "day"]}
        />
      )}
    </LocalizationProvider>
  );
}