import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostPreview = ({ post }) => {
  const navigate = useNavigate();

  const openPostDetail = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="post-preview" onClick={openPostDetail}>
      <div className="post-image-container">
        {post.thumbnail && post.thumbnail !== 'self' && (
          <img src={post.thumbnail} alt={post.title} />
        )}
      </div>
      <div className="post-details">
        <h3 className="post-title">{post.title}</h3>
        <div className="post-meta">
          <span className="post-author">{post.author}</span>
          <span className="post-comments">{post.num_comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;