import { Button, Snackbar, Stack } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const SnackBarLesson = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button onClick={handleClose}>Geri al!</Button>
      <Button onClick={handleClose}>
        <CloseIcon />
      </Button>
    </React.Fragment>
  );

  return (
    <Stack>
      <Button onClick={handleClick}>Snackbar'ı aç!</Button>
      <Snackbar
        open={openSnackbar}
        onClose={handleClose}
        message="Hata mesajı aldınız!"
        action={action}
        autoHideDuration={3000}
      />
    </Stack>
  );
};
