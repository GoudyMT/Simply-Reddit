import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchComments } from '../features/commentsSlice';
import defaultProfilePic from '../images/simply-logo.png';

const PostDetail = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id.toString() === postId)
  );
  const comments = useSelector((state) => state.comments.comments);
  const commentsStatus = useSelector((state) => state.comments.status);

  useEffect(() => {
    if (postId) {
      dispatch(fetchComments(postId));
    }
  }, [dispatch, postId]);

  if (!post) {
    return <div>Post not found or still loading...</div>;
  }

  return (
    <div className='postDetail'>
      <h2>{post.title}</h2>
      {post.thumbnail && post.thumbnail !== 'self' && (
        <img src={post.thumbnail} alt={`Thumbnail for ${post.title}`} />
      )}
      <p>{post.selftext}</p>
      {commentsStatus === 'loading' && <p>Loading comments...</p>}
      {commentsStatus === 'succeeded' && comments.length === 0 && <p>No comments yet.</p>}
      {commentsStatus === 'succeeded' && comments.length > 0 && (
        <div className='comments'>
          <h3>Comments:</h3>
          {comments.map((comment) => (
            <div key={comment.id} className='comment-card'>
              <div className="comment-header">
                <img 
                  src={comment.author.profile_picture || defaultProfilePic } // Replace with actual profile picture if available
                  alt={`${comment.author.name}'s profile`} 
                  className="comment-profile-picture"
                />
                <span className="comment-author">{comment.author.name}</span>
              </div>
              <p className="comment-body">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
      {/* ... (any additional code) */}
    </div>
  );
};

export default PostDetail;