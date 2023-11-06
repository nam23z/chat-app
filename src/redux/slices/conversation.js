import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  group_chat: {},
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations(state, action) {
      const list = action.payload.conversations.map((el) => {
        const this_user = el.participants.find(
          (e) => e._id.toString() !== user_id
        );
        return {
          id: el._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          msg: faker.music.songName(),
          img: faker.image.avatar(),
          time: "9:36",
          unread: 0,
          pinned: true,
          online: this_user.status === "Online",
        };
      });
      state.direct_chat.conversations = list;
    },
    updateDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (el) => {
          if (el.id !== this_conversation._id) {
            return el;
          } else {
            const user = this_conversation.participants.find(
              (e) => e._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName} ${user.lastName}`,
              msg: faker.music.songName(),
              img: faker.image.avatar(),
              time: "9:36",
              unread: 0,
              pinned: true,
              online: user.status === "Online",
            };
          }
        }
      );
    },
    addDirectConversation(state, action) {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (e) => e._id.toString() !== user_id
      );
      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        msg: faker.music.songName(),
        img: faker.image.avatar(),
        time: "9:36",
        unread: 0,
        pinned: true,
        online: user.status === "Online",
      });
    },
  },
});

export default slice.reducer;

export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.fetchDirectConversations({ conversations }));
  };
};

export const AddDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.addDirectConversation({ conversation }));
  };
};

export const UpdateDirectConversation = ({ conversation }) => {
  return async (dispatch, getState) => {
    dispatch(slice.actions.updateDirectConversation({ conversation }));
  };
};
