import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import RemoveTodo from './RemoveTodo';
import React, { useState } from 'react';

// export default App;
// Write your component below!
// This will be the main component that holds the todo list
// You can pass data from the App component to the TodoList component as props
// In the App component, you can define the state to hold the list of todos.
// Implement methods to add, remove, and toggle the completion status of todos, and update the state accordingly.
// Pass these methods down to the relevant components as props.
//TODO: Implement tests in setupTests.js
//TODO: Add Redux
export default function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  console.log(todos);
  return (
    <div className="App">
          <TodoList todos={todos} setTodos={setTodos} />
          <AddTodo onAddTodo={handleAddTodo} todos={todos} /> 
    </div>
  );
}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}