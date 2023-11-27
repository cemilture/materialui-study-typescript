import React, { useState } from "react";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
  FormHelperText,
} from "@mui/material";

export const RadioExampleLesson = () => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === "canboz") {
      setHelperText("Doğru cevap diğer şık");
      setError(false);
    } else if (value === "canboz2") {
      setHelperText("Bravo doğru cevap");
      setError(false);
    } else {
      setHelperText("Lütfen seçim yapınız...");
      setError(true);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel id="demo-radio-buttons-group-label">
          En kapsamlı frontend eğitimini kim veriyor.
        </FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel
            value="canboz"
            control={<Radio />}
            label="Can Boz"
          />
          <FormControlLabel
            value="canboz2"
            control={<Radio />}
            label="Tabii ki Can Boz"
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="contained">
          GÖNDER
        </Button>
      </FormControl>
    </form>
  );
};
