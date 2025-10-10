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
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={todo.completed ? 'completed' : ''}
        >
          {editingId === todo.id ? (
            
            <div className="edit-mode">
              <input
                className='editing-input'
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button className="button list-todo " onClick={() => handleSaveClick(todo.id)}>Save</button>
            </div>
          ) : (
            
            <div className="display-mode">
              <span className='display-todo' onClick={() => handleEditClick(todo)}>{todo.text}</span>
              <div className="todo-buttons">
                <button className='button list-todo' onClick={() => toggleComplete(todo.id)}>
                  {todo.completed ? 'Undo' : 'Mark as Done'}
                </button>
                <button className='button list-todo' onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
  