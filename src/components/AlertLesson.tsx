import { Alert, AlertTitle, Stack } from "@mui/material";

export const AlertLesson = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert!
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert!
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert!
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert!
      </Alert>
      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert with filled!
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert with filled!
      </Alert>
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert with filled!
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert with filled!
      </Alert>
    </Stack>
  );
};
