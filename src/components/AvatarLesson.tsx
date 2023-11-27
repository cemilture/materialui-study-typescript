import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const AvatarLesson = () => {
  return (
    <Stack direction={"row"}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: 2 }}
          src="https://randomuser.me/api/portraits/women/88.jpg"
        />
        <Avatar
          sx={{ marginRight: 2 }}
          src="https://randomuser.me/api/portraits/women/17.jpg"
        />
        <Avatar
          sx={{ marginRight: 2 }}
          src="https://randomuser.me/api/portraits/men/33.jpg"
        />
      </AvatarGroup>
      <AvatarGroup max={4}>
        <Avatar
          sx={{
            marginRight: 2,
            backgroundColor: "Highlight",
            width: 60,
            height: 60,
          }}
        >
          Cemil
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="square">
          Ali
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="rounded">
          Veli
        </Avatar>
        <Avatar
          sx={{
            marginRight: 2,
            backgroundColor: "Highlight",
            width: 60,
            height: 60,
          }}
        >
          Cemil
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="square">
          Ali
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="rounded">
          Veli
        </Avatar>
        <Avatar
          sx={{
            marginRight: 2,
            backgroundColor: "Highlight",
            width: 60,
            height: 60,
          }}
        >
          Cemil
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="square">
          Ali
        </Avatar>
        <Avatar sx={{ marginRight: 2 }} variant="rounded">
          Veli
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};
