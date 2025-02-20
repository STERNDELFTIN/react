import { createSlice } from '@reduxjs/toolkit';

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
});

export default stock;