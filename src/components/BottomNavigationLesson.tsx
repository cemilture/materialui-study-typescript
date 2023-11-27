import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const BottomNavigationLesson = () => {
  const [value, setValue] = useState(-1);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      sx={{ width: "90%", position: "absolute", bottom: 10 }}
    >
      <BottomNavigationAction icon={<RestoreIcon />} label="Önceiler" />
      <BottomNavigationAction icon={<FavoriteIcon />} label="Sevdiklerim" />
      <BottomNavigationAction icon={<LocationOnIcon />} label="Konumum" />
    </BottomNavigation>
  );
};
