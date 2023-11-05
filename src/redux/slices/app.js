import { createSlice } from "@reduxjs/toolkit";

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
