import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user" , JSON.stringify(state.currentUser))
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      (state.error = action.payload), (state.loading = false);
    },
    deleteUserStart : (state) => {
      state.loading = true
    },
    deleteUserFailure : (state , action) => {
      state.error = action.payload;
      state.laoding = false;
    },
    deleteUserSuccess : (state) => {
     state.currentUser = null;
     state.loading = false;
     state.error = null;
    },
    signOutUserStart : (state) => {
      state.loading = true
    },
    signOutUserFailure : (state , action) => {
      state.error = action.payload;
      state.laoding = false;
    },
    signOutUserSuccess : (state) => {
     state.currentUser = null;
     state.loading = false;
     state.error = null;
    }
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess
} = userSlice.actions;

export default userSlice.reducer;
