import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const { decrement } = counterSlice.actions;
export const getCountValue = (state) => state.counter.count;
export default counterSlice.reducer;
