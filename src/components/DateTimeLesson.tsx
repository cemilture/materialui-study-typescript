import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { Dayjs } from "dayjs";

export const DateTimeLesson = () => {
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <Stack spacing={2}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Tarih"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
        <TimePicker
          label="Saat"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </Stack>
  );
};
