import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Adjusted fetchPosts thunk
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async ({ searchTerm }, thunkAPI) => {
    // Modify the URL to use Reddit's search endpoint and include the search term
    const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: { posts: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add posts to the state array
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;