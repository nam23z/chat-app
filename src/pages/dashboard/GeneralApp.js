import React from "react";
import Chat from "./Chat";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

import NoChatSVG from "../../assets/Illustration/NoChat";

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar, chat_type, room_id } = useSelector((store) => store.app);

  // console.log(app, "app");
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chat */}
      <Chat />
      <Box
        sx={{
          height: "100%",
          // width: "100%",
          width: sidebar.open ? "calc(100% - 640px)" : "calc(100% - 220px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* conversation */}
        {room_id !== null && chat_type === "individual" ? <Conversation /> : 
          <Stack spacing={2} sx={{width: "100%", height: "100%"}} alignItems={"center"} justifyContent={"center"} >
            <NoChatSVG/>
            <Typography variant="subtitle2" >
              Select a conversation or start new one
            </Typography>
          </Stack>
        }
        
      </Box>
        {/* contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages/>;
            case "SHARED":
              return <SharedMessages />;
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
