import React, { useState } from 'react';

const CommentForm = () => {

  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  return (
    <form>
      <label>
        Name: 
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </label>

      <label>
        Comment:
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;