import React, { useState } from 'react';
import { CreateTodo } from './components/createTodo';
import { ListTodo } from './components/listTodos';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a To-Do App', completed: false },
  ]);

  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    }
    if (filter === 'active') {
      return !todo.completed;
    }
    return true;
  });

  return (
        <div className="w-full max-w-xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            
      <div className="flex justify-center gap-3 mb-8">
        <button 
          className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" 
          onClick={() => setFilter('all')}>
            All
        </button>
        <button 
          className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" 
          onClick={() => setFilter('active')}>
            Active
        </button>
        <button 
          className="flex-1 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" 
          onClick={() => setFilter('completed')}>
            Completed
        </button>
      </div>

      <CreateTodo addTodo={addTodo} />

      <ListTodo
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;