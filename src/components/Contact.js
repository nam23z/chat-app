import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";
import AntSwitch from "./AntSwitch";

const Contact = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            p={2}
            sx={{ height: "100%" }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>
        {/* Body */}
        <Stack
          p={3}
          spacing={3}
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
        >
          <Stack alignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={600}>
                {"+84 366 055 290"}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack spacing={0.5}>
            <Typography variant="subtitle2">About</Typography>
            <Typography variant="body2">
              Imagination is the only limit
            </Typography>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="subtitle2">Media, Links & Docs</Typography>
            <Button endIcon={<CaretRight />}>23</Button>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            {[1, 2, 3].map((el) => (
              <Box>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Started Message</Typography>
            </Stack>
            <IconButton>
              <CaretRight />
            </IconButton>
          </Stack>
          <Divider />
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>
          <Divider/>
          <Typography>
            1 group in common
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2} >
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5} >
              <Typography variant="subtitle2" >NCN23</Typography>
              <Typography variant="caption" >Owl, Rabbit, Parrot, You</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2} >
              <Button startIcon={<Prohibit/>} fullWidth variant="outlined" >
                Block
              </Button>
              <Button startIcon={<Trash/>} fullWidth variant="outlined" >
                Delete
              </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Contact;
