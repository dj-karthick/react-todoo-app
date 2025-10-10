import React, { useState } from 'react';
import { CreateTodo } from './components/CreateTodo';
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
    <div className="app-container">
      <h1></h1>
      <div className="button-container">
        <button className="all button" onClick={() => setFilter('all')}>All Todos</button>
        <button className="active button" onClick={() => setFilter('active')}>Active Todos</button>
        <button className="complete button" onClick={() => setFilter('completed')}>Completed Todos</button>
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