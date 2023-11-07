import React from "react";
import Chat from "./Chat";
import { Box, Link, Stack, Typography, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import ChatComponent from "./Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

import NoChatSVG from "../../assets/Illustration/NoChat";
import { useSearchParams } from "react-router-dom";

const GeneralApp = () => {
  const [searchParams] = useSearchParams();
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
          borderBottom:
            searchParams.get("type") === "individual-chat" &&
            searchParams.get("id")
              ? "0px"
              : "6px solid #0162C4",
        }}
      >
        {/* conversation */}
        {room_id !== null && chat_type === "individual" ? (
          <ChatComponent />
        ) : (
          <Stack
            spacing={2}
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent={"center"}
          >
            <NoChatSVG />
            <Typography variant="subtitle2">
              Select a conversation or start a{" "}
              <Link
                style={{
                  color: theme.palette.primary.main,
                  textDecoration: "none",
                }}
                to="/"
              >
                new one
              </Link>
            </Typography>
          </Stack>
        )}
      </Box>
      {/* contact */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessages />;
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
