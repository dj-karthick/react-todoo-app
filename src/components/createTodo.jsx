import React, { useState } from 'react';

export function CreateTodo({ addTodo }) {
 
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!text.trim()) return; 
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-todo-form">
      <input
        className="input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button className='submit' type="submit">Add Todo</button>
    </form>
  );
}