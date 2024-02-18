import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    selectPost: (state, action) => action.payload,
  },
});

export const { selectPost } = selectedPostSlice.actions;

export default selectedPostSlice.reducer;