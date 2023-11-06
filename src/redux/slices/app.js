import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
  snackbar: {
    open: null,
    severity: null,
    message: null,
  },
  users: [],
  friends: [],
  friendRequests: [],
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    //toggle sidebar
    toggleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
    openSnackbar(state, action) {
      // const obj = state.snackbar || {};
      // obj.open = true;
      // obj.severity = action.payload.severity;
      // obj.message = action.payload.message;
      // if(state.snackbar !== undefined){
      state.snackbar.open = true;
      state.snackbar.severity = action.payload.severity;
      state.snackbar.message = action.payload.message;
      // }
      console.log("???", action.payload);
      // return obj;
    },
    closeSnackbar(state, action) {
      // const obj = state.snackbar || {};
      // obj.open = false;
      // obj.severity = null;
      // obj.message = null;
      // return obj;
      state.snackbar.open = false;
    },
    updateUsers(state, action) {
      state.users = action.payload.users;
    },
    updateFriends(state, action) {
      state.friends = action.payload.friends;
    },
    updateFriendRequests(state, action) {
      state.friendRequests = action.payload.requests;
    },
  },
});

//Reducer
export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}

export function showSnackbar({ severity, message }) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackbar({
        message,
        severity,
      })
    );
    setTimeout(() => {
      dispatch(slice.actions.closeSnackbar());
    }, 4000);
  };
}

export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackbar());
};

export const FetchUsers = () => {
  return async (dispatch, getState) => {
    await axios.get("/user/get-users", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().auth.token}`,
      },
    }).then((response)=>{
      console.log(response);
      dispatch(slice.actions.updateUsers({users: response.data.data}));
    }).catch((error)=> {
      console.log(error);
    });
  };
};

export const FetchFriends = () => {
  return async (dispatch, getState) => {
    await axios.get("/user/get-friends", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().auth.token}`,
      },
    }).then((response)=>{
      console.log(response);
      dispatch(slice.actions.updateFriends({friends: response.data.data}));
    }).catch((error)=> {
      console.log(error);
    });
  };
};

export const FetchFriendRequests = () => {
  return async (dispatch, getState) => {
    await axios.get("/user/get-friend-requests", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().auth.token}`,
      },
    }).then((response)=>{
      console.log(response);
      dispatch(slice.actions.updateFriendRequests({requests: response.data.data}));
    }).catch((error)=> {
      console.log(error);
    });
  };
};