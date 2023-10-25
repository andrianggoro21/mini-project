import { configureStore } from "@reduxjs/toolkit";
import  quantityReducer  from "./reducers/attendance";


export const store = configureStore({
    reducer: {
        quantity: quantityReducer,
    },
})