import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { cardSlice } from "./cardSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        card: cardSlice.reducer
    }
})