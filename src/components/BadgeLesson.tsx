import { Badge, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const BadgeLesson = () => {
  return (
    <Stack direction={"row"} spacing={3}>
      <Badge badgeContent={4} color="secondary">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={5} color="success">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={100} max={99} color="error">
        <EmailIcon />
      </Badge>
      <Badge
        badgeContent={5}
        color="primary"
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <EmailIcon />
      </Badge>
      <Badge badgeContent={4} color="error" variant="dot">
        <EmailIcon />
      </Badge>
    </Stack>
  );
};
