import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user') ?? 'null'),
  token: localStorage.getItem('token') || null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    }
  }
});

export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
