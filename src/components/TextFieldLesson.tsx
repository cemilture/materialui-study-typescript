import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { TextField, Stack, InputAdornment } from "@mui/material";
import { useState } from "react";

export const TextFieldLesson = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="filled" variant="filled" />
        <TextField label="outlined" variant="outlined" />
        <TextField label="standard" variant="standard" />
        <TextField
          label="small and error"
          variant="standard"
          size="small"
          color="error"
        />
        <TextField label="password" variant="outlined" type="password" />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          helperText="Lütfen şifrenizi giriniz"
        />
        <TextField label="disabled" variant="filled" disabled />
        <TextField
          InputProps={{ readOnly: true }}
          label="readOnly"
          variant="filled"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CurrencyLiraIcon />
              </InputAdornment>
            ),
          }}
          label="Toplam"
          variant="filled"
        />
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CurrencyLiraIcon />
              </InputAdornment>
            ),
          }}
          label="Toplam"
          variant="filled"
        />
      </Stack>
      <Stack direction={"row"}>
        <TextField
          label="password"
          variant="outlined"
          type="password"
          helperText={
            !value //value yoksa demek
              ? "Lütfen şifrenizi giriniz"
              : "Şifrenizi hiç kimseyle paylaşmayın"
          }
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </Stack>
    </Stack>
  );
};
