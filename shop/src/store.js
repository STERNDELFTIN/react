import { configureStore } from '@reduxjs/toolkit';
import user from './store/userSlice.js';
import stock from './store/stockSlice.js';
import cart from './store/cartSlice.js';

export default configureStore({
    reducer: {
        // 여기에서 등록 가능
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})