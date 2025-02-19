import { configureStore, createSlice } from '@reduxjs/toolkit';

// createSlice -> useState() 역할 (state 만들어주는 함수)
let user = createSlice({
    name : 'user', // state 이름
    initialState : 'kim', // 값 -> 로그인된 유저이름

    // state 변경
    reducers : {
        changeName(state){ // state -> 기존 state 의미
            return 'john ' + state;
        }
    }
});
export let { changeName } = user.actions; // state 변경함수들 남음

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
    ],

    reducers : {
        setCount(state, action) {
            let item = state.find(item => item.id === action.payload);
            if (item) item.count += 1; // 해당 id를 가진 item의 개수 증가
        }
    }
});
export let { setCount} = addedItems.actions;

export default configureStore({
    reducer: {
        // 여기에서 등록 가능
        user : user.reducer,
        stock : stock.reducer,
        addedItems : addedItems.reducer
    }
})