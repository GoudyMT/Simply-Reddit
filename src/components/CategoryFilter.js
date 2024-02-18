import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(fetchPosts({ subreddit: category }));
  };

  return (
    <div>
      <button onClick={() => handleCategoryChange('News')}>News</button>
      <button onClick={() => handleCategoryChange('Technology')}>Technology</button>
      <button onClick={() => handleCategoryChange('Entertainment')}>Entertainment</button>
    </div>
  );
};

export default CategoryFilter;