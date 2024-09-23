import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlices";


export const store = configureStore({
    reducer: {
        mode: toggleReducer
    }
})