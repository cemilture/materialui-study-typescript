import { Masonry } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

export const MasonryLesson = () => {
  return (
    <Box>
      <Masonry columns={3}>
        {heights.map((height, index) => (
          <Paper key={index}>
            <Accordion>
              <AccordionSummary
                sx={{ minHeight: height }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Contents</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};
