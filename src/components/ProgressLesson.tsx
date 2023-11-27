import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export const ProgressLesson = () => {
  return (
    <Stack sx={{ width: 350 }} spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress variant="determinate" value={73} />
      <LinearProgress />
      <LinearProgress color="error" />
      <LinearProgress color="success" variant="determinate" value={67} />
    </Stack>
  );
};
