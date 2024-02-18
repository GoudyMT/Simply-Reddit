import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/postsSlice'
import categoriesSlice from '../features/categoriesSlice';
import commentsSlice from '../features/commentsSlice';
import searchSlice from '../features/searchSlice';
import selectedPostSlice from '../features/selectedPostSlice';

export const store = configureStore({
    reducer: {
      posts: postsSlice,
      categories: categoriesSlice,
      comments: commentsSlice,
      search: searchSlice,
      selectedPost: selectedPostSlice,
    },
  });


