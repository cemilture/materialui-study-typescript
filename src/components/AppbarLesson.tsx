import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import React, { useState } from "react";

export const AppbarLesson = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openControl = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Header Örneği
        </Typography>
        <Stack direction="row" marginLeft={"auto"}>
          <Button sx={{ color: "white" }}>Anasayfa</Button>
          <Button sx={{ color: "white" }}>Hakkımızda</Button>
          <Button sx={{ color: "white" }}>Ürünler</Button>
          <Button sx={{ color: "white" }}>Fiyatlar</Button>
          <Button sx={{ color: "white" }} onClick={handleClick}>
            İndirimler
          </Button>
        </Stack>
        <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Kitap</MenuItem>
          <MenuItem onClick={handleClose}>Kırtasiye Ürünleri</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
