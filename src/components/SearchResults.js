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
    if (searchTerm.trim()) { // Check if searchTerm is not just whitespace
      dispatch(fetchPosts({ searchTerm }));
    }
  }, [dispatch, searchTerm]);

  let content;

  if (searchTerm.trim() === '') {
    // If searchTerm is empty or only contains whitespace
    content = <p>Nothing was searched for... what a shame.</p>;
  } else if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded' && posts.length > 0) {
    content = <PostList posts={posts} />;
  } else if (status === 'succeeded' && posts.length === 0) {
    // If the search was made but no posts were found
    content = <p>No results found.</p>;
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