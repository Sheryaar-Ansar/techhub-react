import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlices";
import cartReducer from "./features/cartSlices";
import cartsliderReducer from "./features/cartsliderSlices";


export const store = configureStore({
    reducer: {
        mode: toggleReducer,
        cart: cartReducer,
        slider: cartsliderReducer,
    }
})