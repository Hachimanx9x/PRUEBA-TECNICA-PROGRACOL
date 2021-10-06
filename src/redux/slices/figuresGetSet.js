import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allfigures: [],
  status: "none",
};

export const slice = createSlice({
  name: "sliceFigures",
  initialState,
  reducers: {
    getfigures: (state, action) => {
      state.allfigures = action.payload;
      state.status = "on";
    },
    faildLoad: (state) => {
      state.status = "error";
    },
    clearfigures: (state) => {
      state.allfigures = initialState.allfigures;
      state.status = initialState.status;
    },
  },
});

export const { getfigures, faildLoad, clearfigures } = slice.actions;
export default slice.reducer;
