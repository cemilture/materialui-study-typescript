import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const SpeedDialLesson = () => {
  return (
    <SpeedDial
      ariaLabel="speeddial örnek"
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipOpen tooltipTitle="Coppy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipOpen tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipOpen tooltipTitle="Share" />
    </SpeedDial>
  );
};
