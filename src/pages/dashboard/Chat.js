import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data/index";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";

const Chat = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        width: "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>

        <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
          <ArchiveBox size={24} />
          <Button>Archive</Button>
        </Stack>

        <Divider />

        <Stack
          direction={"column"}
          sx={{ overflow: "auto" }}
        >
          <Stack spacing={2}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList &&
              ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
          </Stack>

          <Stack spacing={2}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList &&
              ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />;
              })}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
