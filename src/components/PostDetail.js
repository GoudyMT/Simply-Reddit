import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // To access route params

const PostDetail = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id.toString() === postId) // Make sure to convert to string if necessary
  );

  // If the post isn't found, return a message or null
  if (!post) {
    return <div>Post not found or still loading...</div>;
  }

  // If the post is found, render the details
  return (
    <div>
      <h2>{post.title}</h2>
      {post.thumbnail && post.thumbnail !== 'self' && (
        <img src={post.thumbnail} alt={`Thumbnail for ${post.title}`} />
      )}
      <p>{post.selftext}</p>
      {/* ... render other post details ... */}
    </div>
  );
};

export default PostDetail;