import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  function onSavePostClicked() {
    if (title && content) {
      dispatch(postAdded(title, content));

      setTitle('');
      setContent('');
    }
  }

  return (
    <section>
      <h2 className='text-[1.5rem]'>Add a New Post</h2>
      <form className='flex flex-col gap-y-[1rem]'>
        <label htmlFor='postTitle'>Post Title:</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button onClick={onSavePostClicked} type='button'>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
