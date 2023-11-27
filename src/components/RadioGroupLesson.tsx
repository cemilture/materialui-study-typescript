import { useState } from "react";
import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

export const RadioGroupLesson = () => {
  const [value, setValue] = useState("2000");
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(e.target.value);
  //   };

  console.log(value);

  return (
    <FormControl>
      <FormLabel>Maaş Beklentiniz</FormLabel>
      <RadioGroup
        name="salary-expectation"
        row
        onChange={(e) => setValue(e.target.value)}
        value={value}
      >
        <FormControlLabel label="2000$" value={2000} control={<Radio />} />
        <FormControlLabel label="3000$" value={3000} control={<Radio />} />
        <FormControlLabel label="4000$" value={4000} control={<Radio />} />
      </RadioGroup>
      <FormHelperText>Lütfen bir tanesini seçiniz...</FormHelperText>
    </FormControl>
  );
};
