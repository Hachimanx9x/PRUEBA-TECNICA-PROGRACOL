import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { Authorization: "", name: "", uId: "", uRol: "" },
  InfoUser: {
    name: "",
    lastname: "",
    nickname: "",
    rol: "",
    dateCreation: "",
  },
  userlog: "none",
};

export const authLoginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.userlog = "log";
    },
    setInfoUser: (state, action) => {
      state.InfoUser = action.payload;
      state.userlog = "log";
    },
    setUserlog: (state) => {
      state.userlog = "error";
    },
    logout: (state) => {
      //    console.log(initialState);
      state.userlog = "none";
      state.user = initialState.user;
      //  console.log(state);
    },
  },
});

export const { loginUser, logout, setInfoUser, setUserlog } =
  authLoginUser.actions;
export const selectAuthUser = (state) => state.authUser.user;
export default authLoginUser.reducer;
