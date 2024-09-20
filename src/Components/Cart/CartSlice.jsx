import { createSlice } from '@reduxjs/toolkit'; // Import createSlice

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({  // Renamed from CartSlice to cartSlice
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProduct);  // Push tempProduct instead of action.payload
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
