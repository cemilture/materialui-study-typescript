import { Box, Button, ClickAwayListener, Tooltip } from "@mui/material";
import { useState } from "react";

export const ToolTipLesson = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box margin={"200px"}>
      <Tooltip
        placement="top-end"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aut veritatis accusamus beatae placeat labore, id, iure itaque ad ea aliquam. Deserunt fugit, modi soluta harum accusantium quae eligendi a?"
      >
        <Button>Üzerine gel</Button>
      </Tooltip>
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <Tooltip
          onClose={() => setOpen(false)}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title="Başka yere tıkla"
          placement="top-start"
        >
          <Button onClick={() => setOpen(true)}>Tıkla</Button>
        </Tooltip>
      </ClickAwayListener>
    </Box>
  );
};
