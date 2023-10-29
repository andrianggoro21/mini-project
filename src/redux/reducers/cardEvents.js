import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  id: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    add(state, action) {
      const newItems = action.payload;
      state.id = newItems
    //   localStorage.setItem("add", state.id)
    },
  },
});



export const { add } = cardSlice.actions;

export default cardSlice.reducer;
