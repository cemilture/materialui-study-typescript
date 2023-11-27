import { Typography } from "@mui/material";

export const LessonTypography = () => {
  return (
    <div>
      <Typography variant="body1">
        Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
        quasi nemo velit repudiandae amet molestias? Eos, expedita quam, quae
        deleniti minima accusantium incidunt aliquam iste quis, numquam in
        saepe?
      </Typography>
      <Typography variant="body2">
        Body2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        at nihil debitis perspiciatis est, libero inventore consequuntur vero
        nostrum accusantium alias esse, impedit tenetur id obcaecati ratione a
        ab distinctio!
      </Typography>
      <Typography variant="h1">H1 Görünümü</Typography>
      <Typography variant="h2">H2 Görünümü</Typography>
      <Typography variant="h3">H3 Görünümü</Typography>
      <Typography variant="h4">H4 Görünümü</Typography>
      <Typography variant="h5">H5 Görünümü</Typography>
      <Typography variant="h6">H6 Görünümü</Typography>
      <Typography variant="h1" component="h4">
        H1 Görünümlü H4 componenti
      </Typography>
      <Typography variant="h3" align="left">
        H3 Görünümü align left
      </Typography>
      <Typography variant="h3" align="right">
        H3 Görünümü align right
      </Typography>
      <Typography variant="subtitle1">Alt Başlık 1</Typography>
      <Typography variant="subtitle2">Alt Başlık 2</Typography>
    </div>
  );
};
