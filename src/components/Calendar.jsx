import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

export default function Calender() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker onChange={() => {}} />
    </LocalizationProvider>
  );
}
