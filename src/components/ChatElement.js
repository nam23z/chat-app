import { faker } from "@faker-js/faker";
import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyledBadge";
import { useDispatch, useSelector } from "react-redux";
import { SelectConversation } from "../redux/slices/app";

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { room_id } = useSelector((state) => state.app);
  
  const selectedChatId = room_id?.toString();
  let isSelected = +selectedChatId === id;
  if (!selectedChatId) {
    isSelected = false;
  }

  return (
    <Box
      onClick={() => {
        dispatch(SelectConversation({ room_id: id }));
      }}
      p={2}
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.default,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} alt="avt" />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} alt="avt" />
          )}

          <Stack spacing={0.5}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};
export default ChatElement;
