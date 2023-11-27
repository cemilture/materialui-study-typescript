import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useState } from "react";

export const TabsLesson = () => {
  const [value, setValue] = useState("0");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="First" value="0" />
          <Tab label="Second" value="1" />
          <Tab label="Third" value="2" />
        </TabList>
        <TabPanel value="0">First Panel</TabPanel>
        <TabPanel value="1">Second Panel</TabPanel>
        <TabPanel value="2">Third Panel</TabPanel>
      </TabContext>
    </Box>
  );
};
