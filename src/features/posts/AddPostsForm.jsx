import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  function onSavePostClicked() {
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  }

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = title && content && userId;

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

        <label htmlFor='authorTitle'>Author:</label>
        <select id='authorTitle' value={userId} onChange={onAuthorChanged}>
          <option value=''>Select an author</option>
          {usersOptions}
        </select>

        <label htmlFor='postContent'>Content:</label>
        <textarea
          id='postContent'
          name='postContent'
          value={content}
          onChange={onContentChanged}
        />
        <button onClick={onSavePostClicked} type='button' disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostsForm;
