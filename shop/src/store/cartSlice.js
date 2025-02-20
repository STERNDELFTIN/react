import { createSlice } from '@reduxjs/toolkit';

// 유저가 장바구니에 추가한 상품들
let cart = createSlice({
    name : 'cart',
    initialState : [
        { id : 0, name : 'White and Black', count : 2 },
        { id : 2, name : 'Grey Yordan', count : 1 }
    ],

    reducers : {
        setCount(state, action) {
            let item = state.find(item => item.id === action.payload);
            if (item) item.count += 1; // 해당 id를 가진 item의 개수 증가
        },
        setItem(state, action) {
            let item = state.find((item) => item.id === action.payload.id);
            if (item) {
                item.count += 1; // 이미 존재하면 개수 증가
            } else { 
                state.push({...action.payload, count: 1});
            }
        },
    }
});
export let { setCount, setItem } = cart.actions;

export default cart;