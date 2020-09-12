import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {isLogged: false},
  reducers: {
    setAuthenticated: (state, action) => {
      state.isLogged = action.payload;
      return state;
    }
  }
})

export const isLogged_map = (state) => state.user.isLogged;
export const authActions = authSlice.actions;
export default authSlice.reducer;
