import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Grace' },
  { id: '1', name: 'Tom' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
