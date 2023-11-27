import { Box, Drawer, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const DrawerLesson = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenR, setIsOpenR] = useState(false);

  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <Typography>Soldaki Panel</Typography>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" onClick={() => setIsOpenR(true)}>
        <Typography>Sağdaki Panel</Typography>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <Box width={250}>
          <Typography>Soldaki Panel</Typography>
        </Box>
      </Drawer>
      <Drawer anchor="right" open={isOpenR} onClose={() => setIsOpenR(false)}>
        <Box width={250}>
          <Typography>Sağdaki Panel</Typography>
        </Box>
      </Drawer>
    </>
  );
};
