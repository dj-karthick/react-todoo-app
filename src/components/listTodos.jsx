import React, { useState } from 'react';

export function ListTodo({ todos, toggleComplete, deleteTodo, updateTodo }) {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const handleSaveClick = (id) => {
    if (!editingText.trim()) {
      deleteTodo(id);
    } else {
      updateTodo(id, editingText);
    }
    setEditingId(null);
    setEditingText('');
  };

  return (
    <ul className="list-none p-0 flex flex-col gap-3">
      {todos.map((todo) => (
        <li
          key={todo.id}                    
          className={`flex justify-between items-center p-4 rounded-lg shadow-sm transition-all ${
            todo.completed 
              ? 'bg-green-50 text-gray-500 line-through' 
              : 'bg-white border border-gray-200'
          }`}
        >
          {editingId === todo.id ? (
            // Edit View
            <div className="flex-1 flex items-center gap-3">
              <input
                className='flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button 
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" 
                onClick={() => handleSaveClick(todo.id)}>
                  Save
              </button>
            </div>
          ) : (
            // Normal View            
            <div className="flex-1 flex items-center justify-between gap-4">
              <span 
                className='flex-grow text-gray-800 cursor-pointer' 
                onClick={() => handleEditClick(todo)}>
                  {todo.text}
              </span>
              <div className="flex-shrink-0 flex items-center gap-2">
                <button                   
                  className='py-1 px-3 text-xs font-medium bg-yellow-500 text-white rounded-full shadow-sm hover:bg-yellow-600 transition-colors' 
                  onClick={() => toggleComplete(todo.id)}>
                    {todo.completed ? 'Undo' : 'Done'}
                </button>
                <button 
                  className='py-1 px-3 text-xs font-medium bg-red-500 text-white rounded-full shadow-sm hover:bg-red-600 transition-colors' 
                  onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}