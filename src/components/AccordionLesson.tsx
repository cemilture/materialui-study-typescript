import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

export const AccordionLesson = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"} //expanded ile açılmasını koşula bağlıyoruz panel1 e eşitse açıyor
        onChange={handleChange("panel1")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          İlk Bölüm
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          incidunt, ab optio esse maxime natus! Adipisci, eveniet vitae
          explicabo officiis dolore, dignissimos quibusdam mollitia amet tempora
          rem quae ducimus id!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          İkinci Bölüm
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          incidunt, ab optio esse maxime natus! Adipisci, eveniet vitae
          explicabo officiis dolore, dignissimos quibusdam mollitia amet tempora
          rem quae ducimus id!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Üçüncü Bölüm
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          incidunt, ab optio esse maxime natus! Adipisci, eveniet vitae
          explicabo officiis dolore, dignissimos quibusdam mollitia amet tempora
          rem quae ducimus id!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
