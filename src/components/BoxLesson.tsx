import { Box } from "@mui/material";

export const BoxLesson = () => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "150px",
        backgroundColor: "darkblue",
        color: "white",
        textAlign: "center",
        padding: "20px",
        "&:hover": { backgroundColor: "lightblue" },
      }}
    >
      BoxLesson
    </Box>
  );
};
