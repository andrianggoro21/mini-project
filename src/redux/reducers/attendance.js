import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  ticket: [1]
};

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value === 3) {
        state.value = 3;
      } else {
        state.value += 1;
        state.ticket.push(state.value)
      }
    },
    decrement: (state) => {
      if (state.value === 1) {
        state.value = 1;
      } else {
        state.value -= 1;
        state.ticket.pop();
      }
    },
  },
});

export const { increment, decrement } = quantitySlice.actions;

export default quantitySlice.reducer;
