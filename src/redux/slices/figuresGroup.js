import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allgroups: [],
  statusGroup: "none",
};

export const slice = createSlice({
  name: "sliceGroupFigure",
  initialState,
  reducers: {
    getGroups: (state, action) => {
      state.allgroups = action.payload;
      state.statusGroup = "on";
    },
    faildLoadGroups: (state) => {
      state.statusGroup = "error";
    },
    clearGroupFigure: (state) => {
      state.allgroups = initialState.allgroups;
      state.statusGroup = initialState.statusGroup;
    },
  },
});

export const { getGroups, faildLoadGroups, clearGroupFigure } = slice.actions;

export default slice.reducer;
