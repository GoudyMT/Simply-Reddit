import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts }  from '../features/postsSlice';
import PostList from './PostList';

const SearchResults = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (searchTerm) {
      dispatch(fetchPosts({ searchTerm }));
    }
  }, [dispatch, searchTerm]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = <PostList posts={posts} />;
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Search Results</h1>
      {content}
    </div>
  );
};

export default SearchResults;