import { Stack, Divider } from "@mui/material";

export const StackLesson = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }} //görüntüleyecek cihazın büyüklüğüne göre ayarlıyor
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent={"center"}
      alignItems={"center"}
      divider={<Divider orientation="vertical" flexItem />} //flexItem yazmazsak flex yapısı içinde görünmüyor
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
};
