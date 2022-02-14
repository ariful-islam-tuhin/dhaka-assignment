import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
       <span key={post.id} className='list-group-item'>
          {post.title}
          </span>
      ))}
    </ul>
  );
};

export default Posts;