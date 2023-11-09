import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ArchiveBox,
  CircleDashed,
  MagnifyingGlass,
  Users,
} from "phosphor-react";
import React, { useEffect, useState } from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import ChatElement from "../../components/ChatElement";
import Friends from "../../sections/main/Friends";
import { socket } from "../../socket";
import { useDispatch, useSelector } from "react-redux";
import { FetchDirectConversations } from "../../redux/slices/conversation";

const user_id = window.localStorage.getItem("user_id");

const Chat = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { conversations } = useSelector(
    (state) => state.conversation.direct_chat
  );

  useEffect(() => {
    socket.emit("get_direct_conversations", { user_id }, (data) => {
      //data => List of conversations
      // console.log(data);
      dispatch(FetchDirectConversations({ conversations: data }));
    });
  }, []);

  const [openDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
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
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton
                onClick={() => {
                  handleOpenDialog();
                }}
              >
                <Users />
              </IconButton>
              <IconButton>
                <CircleDashed />
              </IconButton>
            </Stack>
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

          <Stack direction={"column"} sx={{ overflow: "auto" }}>
            <Stack spacing={2}>
              {/* <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList &&
                ChatList.filter((el) => el.pinned).map((el) => {
                  return <ChatElement {...el} />;
                })} */}
              {/* all chat */}
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Chats
              </Typography>
              {conversations &&
                conversations
                  .filter((el) => !el.pinned)
                  .map((el) => {
                    return <ChatElement {...el} />;
                  })}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      {openDialog && (
        <Friends open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Chat;
