import { configureStore } from "@reduxjs/toolkit";
import  quantityReducer  from "./reducers/attendance";
import  cardReducer from "./reducers/cardEvents";
import AuthReducer from "./reducer/authReducer";

export const store = configureStore({
    reducer: {
        quantity: quantityReducer,
        card: cardReducer,
        AuthReducer: AuthReducer,
    },
})



