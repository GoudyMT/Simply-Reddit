import React from 'react';
import { useSelector } from 'react-redux';
import PostPreview from './PostPreview';

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;