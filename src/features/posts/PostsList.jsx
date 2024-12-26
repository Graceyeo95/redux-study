import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className='border-2 p-[1rem]' key={post.id}>
      <h3>{post.title}</h3>
      <p className=''>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
