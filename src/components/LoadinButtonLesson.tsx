import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";

export const LoadinButtonLesson = () => {
  const [value, setValue] = useState(false);

  return (
    <Stack direction={"row"}>
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton
        variant="outlined"
        loading={value}
        onClick={() => setValue(true)}
      >
        Kaydet
      </LoadingButton>
    </Stack>
  );
};
