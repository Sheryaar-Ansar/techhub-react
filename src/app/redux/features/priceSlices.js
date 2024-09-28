import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    minRange : 0,
    maxRange : 980000,
}

export const priceSlices = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setMinRange: (state, action) => {
            state.minRange = action.payload
            console.log('min: ', action);

        },
        setMaxRange: (state, action) => {
            state.maxRange = action.payload
            console.log('max: ', action);
            
        },
        setResetRange: (state) => {
            state.minRange = 0;
            state.maxRange = 980000;
        },
    },
})

export const { setMinRange, setMaxRange } = priceSlices.actions;
export default priceSlices.reducer;