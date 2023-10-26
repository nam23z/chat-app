import React from "react";
import Chat from "./Chat";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();
  const {sidebar} = useSelector((store) => store.app);

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
        <Conversation />
        {/* contact */}
      </Box>
      {sidebar.open && <Contact/>}
    </Stack>
  );
};

export default GeneralApp;
