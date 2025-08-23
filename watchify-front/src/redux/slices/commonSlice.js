import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'commonstoreslice',
  initialState: {
    count: 0,
    cart: []
  },
  reducers: {
    setCount: (state, action) => {
      state.count = state.count + action.payload  ;
    },
    setProductToCart: (state, action) => {
      state.cart =  action.payload  ;
    },
  },
});

export const {setCount, setProductToCart} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
