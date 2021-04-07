import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../../app/store';
import { data } from 'data/data';

export const initialState = {
    loading: false,
    hasErrors: false,
    products: [],
    data,
    cart: [],
    cartItems: 0,
    cartPrice: 0,
};

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        reducer2: (state, { payload }) => {
            return { products: [...state.products, ...payload] };
        },
        cartAdd: (state, action) => {
            const p = action.payload;

            let existing = state.cart.id === p.id;

            state.cartItems += 1;

            if (existing) {
                state.cartPrice = [
                    ...state.cartPrice,
                    state.cartItems * state.cart.price,
                ];
            } else {
                state.cart = [...state.cart, p];
                state.cartPrice += p.price;
            }
        },
    },
});

export const { cartAdd, reducer2 } = shopSlice.actions;

export default shopSlice.reducer;
