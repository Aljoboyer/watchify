import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const commonSlice = createSlice({
  name: 'commonstoreslice',
  initialState: {
    count: 0,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = state.count + action.payload  ;
    },
  },
});

export const {setCount} =
  commonSlice.actions;

export const commonSliceReducer = commonSlice.reducer;
