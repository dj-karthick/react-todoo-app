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
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button         
        className='flex-shrink-0 p-3 bg-green-500 text-white font-semibold rounded-lg shadow-sm hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500' 
        type="submit">
          Add Todo
      </button>
    </form>
  );
}