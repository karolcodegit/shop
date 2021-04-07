import { configureStore } from '@reduxjs/toolkit';
import shopSlice from 'data/Features/ShopSlice';

export const store = configureStore(
    {
        reducer: {
            shop: shopSlice,
        },
    },

    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);
