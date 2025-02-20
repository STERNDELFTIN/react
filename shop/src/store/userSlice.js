import { createSlice } from '@reduxjs/toolkit';

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

export default user;