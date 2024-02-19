import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomSubreddit = createAsyncThunk(
  'subreddits/fetchRandomSubreddit',
  async () => {
    // Fetch a list of popular subreddits
    const response = await fetch('https://www.reddit.com/subreddits/popular.json');
    const subreddits = await response.json();

    // Extract subreddit names
    const subredditNames = subreddits.data.children.map((sub) => sub.data.display_name_prefixed);

    // Select a random subreddit name
    const randomSubreddit = subredditNames[Math.floor(Math.random() * subredditNames.length)];

    return randomSubreddit; // This is the name of the random subreddit
  }
);

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState: {
    randomSubreddit: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomSubreddit.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomSubreddit.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.randomSubreddit = action.payload;
      })
      .addCase(fetchRandomSubreddit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default subredditsSlice.reducer;