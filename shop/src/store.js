import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice -> useState() 역할 (state 만들어주는 함수)
let user = createSlice({
    name : 'user', // state 이름
    initialState : 'kim' // 값 -> 로그인된 유저이름
});

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
});

// 유저가 장바구니에 추가한 상품들
let addedItems = createSlice({
    name : 'addedItems',
    initialState : [
        { id : 0, name : 'White and Black', count : 2 },
        { id : 2, name : 'Grey Yordan', count : 1 }
    ]
});

export default configureStore({
    reducer: {
        // 여기에서 등록 가능
        user : user.reducer,
        stock : stock.reducer,
        addedItems : addedItems.reducer
    }
})