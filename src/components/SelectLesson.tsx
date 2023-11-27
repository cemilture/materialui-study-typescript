import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const SelectLesson = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);

  return (
    <Box width="250px">
      <TextField
        SelectProps={{ multiple: true }}
        label="Ülke Seçiniz"
        select
        fullWidth
        value={country}
        onChange={(country) =>
          setCountry(
            typeof country.target.value === "string"
              ? country.target.value.split(",")
              : country.target.value
          )
        }
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">Fransa</MenuItem>
      </TextField>
      <p>{country.join(",")}</p>
    </Box>
  );
};
