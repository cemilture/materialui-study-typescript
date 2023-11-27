import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

export const CheckboxLesson = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowledge, setKnowledge] = useState<string[]>([]);

  console.log(knowledge);

  const handleKnowledgeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowledge.indexOf(event.target.value);
    if (index === -1) {
      setKnowledge([...knowledge, event.target.value]);
    } else {
      setKnowledge(knowledge.filter((item) => item !== event.target.value));
    }
  };

  console.log(isAccept);

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox />}
              value="primary"
              label="İlkokul"
            />
            <FormControlLabel
              control={<Checkbox />}
              value="high"
              label="lise"
            />
            <FormControlLabel
              control={<Checkbox />}
              value="uni"
              label="Üniversite"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel></FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAccept}
                onChange={(e) => setIsAccept(e.target.checked)}
              />
            }
            label="Kullanım Koşullarını Kabul Ediyorum."
          />
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Frontend de neleri biliyorsun?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowledge.includes("react")} //react var mı yok onu kontrol edecek
                  onChange={handleKnowledgeChange}
                />
              }
              label="React JS"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowledge.includes("angular")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowledge.includes("vue")}
                  onChange={handleKnowledgeChange}
                />
              }
              label="Vue JS"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
