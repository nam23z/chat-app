import {
    Box,
    IconButton,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { UpdateSidebarType } from "../redux/slices/app";
  import { CaretLeft } from "phosphor-react";

import Message from "./Conversation/Message";
  
  const StarredMessages = () => {
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
              spacing={3}
            >
              <IconButton
                onClick={() => {
                  dispatch(UpdateSidebarType("CONTACT"));
                }}
              >
                <CaretLeft />
              </IconButton>
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
          </Box>

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
            {/* mes */}
            <Message/>
          </Stack>
        </Stack>
      </Box>
    );
  };
  
  export default StarredMessages;
  