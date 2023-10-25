import React from "react";
import Chat from "./Chat";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chat */}
      <Chat />
      <Box
        sx={{
          height: "100%",
          width: "80%",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
      >
        {/* conversation */}
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
