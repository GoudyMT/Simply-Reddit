import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/postsSlice'
import commentsSlice from '../features/commentsSlice';
import searchSlice from '../features/searchSlice';
import selectedPostSlice from '../features/selectedPostSlice';
import subredditsReducer from '../features/subredditsSlice';

export const store = configureStore({
    reducer: {
      posts: postsSlice,
      comments: commentsSlice,
      search: searchSlice,
      selectedPost: selectedPostSlice,
      subreddits: subredditsReducer,
    },
  });


