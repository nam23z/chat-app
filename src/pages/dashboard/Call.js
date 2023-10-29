import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../components/Search";
import { MagnifyingGlass, Phone } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallLogElement } from "../../components/CallElement";
import {CallLogs} from "../../data/index"
import StartCall from "../../sections/main/StartCall";
import { useState } from "react";

const Call = () => {

  const theme = useTheme();

  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0 0 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Call Logs</Typography>
            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(!openDialog);
                }}
              >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={3}
              sx={{ flexGrow: 1, overflow: "auto", height: "100%" }}
            >
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2}>
                  {/*  */}
                  {/* <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    Pinned
                  </Typography> */}
                  {/* Call Logs */}
                  {CallLogs.map((el)=> <CallLogElement {...el} /> )}
                  
                  </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
        {/* // TODO => reuse Conversation components */}
      </Stack>
      {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
      
    </>
  );
};

export default Call;
