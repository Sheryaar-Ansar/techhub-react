import { createSlice } from "@reduxjs/toolkit";


const initialState = 
    JSON.parse(localStorage.getItem('cartArr')) || []



export const cartSlices = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const existingProduct = state.find((item)=>item.id === action.payload.id)
            let updatedCart
            if(existingProduct){
                updatedCart = state.map((item)=>item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
            }else{
                updatedCart = [...state, action.payload]
            }
            localStorage.setItem('cartArr', JSON.stringify(updatedCart))
            return updatedCart
            
            
            
        },
        removeCart: (state, action) => {
            const updatedCart = state.filter((item)=>item.id !== action.payload)
            localStorage.setItem('cartArr', JSON.stringify(updatedCart))
            return updatedCart

        },
        cartIncrement: (state, action) => {
            const updatedCart = state.map((item)=>item.id===action.payload.id ? {...item, qty: item.qty + 1} : item)
            localStorage.setItem('cartArr', JSON.stringify(updatedCart))
            return updatedCart
        },
        cartDecrement: (state, action) => {
            const updatedCart = state.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty -1 } : item)
            localStorage.setItem('cartArr', JSON.stringify(updatedCart))
            return updatedCart
        },
    }
})

export const { addtoCart, removeCart, cartIncrement, cartDecrement } = cartSlices.actions;
export default cartSlices.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem('cartArr')) || [];

// export const cartSlices = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addtoCart: (state, action) => {
//             const existingProduct = state.find((item) => item.id === action.payload.id);
//             let updatedCart;

//             if (existingProduct) {
//                 updatedCart = state.map((item) => 
//                     item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//                 );
//             } else {
//                 updatedCart = [...state, action.payload];
//             }

//             localStorage.setItem('cartArr', JSON.stringify(updatedCart)); // Save updated cart to localStorage
//             return updatedCart; // Return new updated cart array as the state
//         },

//         removeCart: (state, action) => {
//             const updatedCart = state.filter((item) => item.id !== action.payload);
//             localStorage.setItem('cartArr', JSON.stringify(updatedCart)); // Save updated cart to localStorage
//             return updatedCart; // Return updated state
//         },

//         cartIncrement: (state, action) => {
//             const updatedCart = state.map((item) => 
//                 item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
//             );
//             localStorage.setItem('cartArr', JSON.stringify(updatedCart)); // Save updated cart to localStorage
//             return updatedCart; // Return updated state
//         },

//         cartDecrement: (state, action) => {
//             const updatedCart = state.map((item) => 
//                 item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
//             );
//             localStorage.setItem('cartArr', JSON.stringify(updatedCart)); // Save updated cart to localStorage
//             return updatedCart; // Return updated state
//         },
//     }
// });

// export const { addtoCart, removeCart, cartIncrement, cartDecrement } = cartSlices.actions;
// export default cartSlices.reducer;
