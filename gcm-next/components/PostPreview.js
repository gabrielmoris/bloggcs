import React from 'react'

function PostPreview({post}) {
  return (
      <>
          <h3>{post.attributes.title}</h3>
          <p>{post.attributes.description}</p>
      </>
  );
}

export default PostPreview