import { Stack } from "@mui/material";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";

export const DateRangeLesson = () => {
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker localeText={{ start: "Başlangıç", end: "Bitiş" }} />
      </LocalizationProvider>
    </Stack>
  );
};
