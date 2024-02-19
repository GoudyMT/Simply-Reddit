import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';
import PostList from './PostList'; 

const SubredditPage = () => {
  const { subredditName } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (subredditName) {
      dispatch(fetchPosts({ subreddit: subredditName }));
    }
  }, [dispatch, subredditName]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    // Assuming PostList can handle empty posts array
    content = <PostList posts={posts} />;
  } else if (status === 'failed') {
    content = <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>/r/{subredditName}</h1>
      {content}
    </div>
  );
};

export default SubredditPage;