import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  valueV: 0,
  ticket: []
}

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
      if (state.value === 0) {
        state.value = 0;
      } else {
        state.value -= 1;
        state.ticket.pop();
      }
    },
    incrementVvip: (state) => {
      if (state.valueV === 3) {
        state.valueV = 3;
      } else {
        state.valueV += 1;
        state.ticket.push(state.valueV)
      }
    },
    decrementVvip: (state) => {
      if (state.valueV === 0) {
        state.valueV = 0;
      } else {
        state.valueV -= 1;
        state.ticket.pop();
      }
    },
  },
});

export const { increment, decrement, incrementVvip, decrementVvip} = quantitySlice.actions;

export default quantitySlice.reducer;
