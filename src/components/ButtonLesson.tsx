import { Stack, Button, ButtonGroup } from "@mui/material";
import AddAlertIcon from "@mui/icons-material/AddAlert";

export const ButtonLesson = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="inherit">
          inherit
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="inherit">
          inherit
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="inherit">
          inherit
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2} display={"block"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button
          variant="contained"
          startIcon={<AddAlertIcon />}
          onClick={() => alert("Tıklandı")}
        >
          startIcon
        </Button>
        <Button
          variant="contained"
          endIcon={<AddAlertIcon />}
          onClick={() => alert("Tıklandı")}
        >
          endIcon
        </Button>
      </Stack>
      <Stack direction={"row"} display={"block"} spacing={2}>
        <ButtonGroup variant="contained">
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
        <ButtonGroup variant="text">
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="large"
          color="error"
        >
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
          <Button>ButtonGroup</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
