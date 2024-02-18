import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
    clearSearch: (state) => {
      state.searchTerm = '';
    },
  },
});

export const { updateSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;