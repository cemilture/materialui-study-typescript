import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useState } from "react";

export const DialogLesson = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Stack>
      <Button onClick={() => setDialogOpen(true)}>Dialog'u Aç</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hangisini biliyorsun?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Frontend frameworlerinden hangisini biliyorsun?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Angular</Button>
            <Button onClick={() => setDialogOpen(false)}>React</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Stack>
  );
};
