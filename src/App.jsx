import React from 'react';
import Counter from './features/counter/Counter';
import PostsList from './features/posts/PostsList';
import AddPostsForm from './features/posts/AddPostsForm';

function App() {
  return (
    <main className='flex gap-x-[300px] p-[2rem]'>
      <Counter />
      <div className='flex gap-[3rem]'>
        <PostsList />
        <AddPostsForm />
      </div>
    </main>
  );
}

export default App;
