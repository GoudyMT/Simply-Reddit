import React from 'react';
import { useSelector } from 'react-redux';

const PostDetail = ({ postId }) => {
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const comments = useSelector((state) => state.comments.comments);

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} />
      <p>{post.selftext}</p>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>{comment.body}</div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;