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
    deleteFigure: (state, action) => {
      const { id, name } = action.payload;
      //   console.log(action.payload);
      let result = state.allfigures.filter(
        (ele) => ele?.id !== id && ele?.name !== name
      );

      // console.log(result);
      //  debugger;
      state.allfigures = result;
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

export const { getfigures, faildLoad, clearfigures, deleteFigure } =
  slice.actions;
export default slice.reducer;
