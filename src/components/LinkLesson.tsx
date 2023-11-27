import { Box, Link } from "@mui/material";

export const LinkLesson = () => {
  return (
    <Box sx={{ display: "flex", gap: "15px" }}>
      <Link href="https://www.youtube.com/" target="_blank" underline="always">
        Youtube'a git
      </Link>
      <Link href="https://www.youtube.com/" target="_blank" underline="none">
        Youtube'a git
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        underline="hover"
        color={"darkgreen"}
      >
        Youtube'a git
      </Link>
      <Link
        // component="button"
        variant="body2"
        href="https://www.youtube.com/"
        target="_blank"
        underline="hover"
        onClick={() => {
          console.log("tıklandı");
        }}
      >
        Youtube'a git buton
      </Link>
    </Box>
  );
};
