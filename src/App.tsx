import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TodoList from './features/List/TodoList';
import SingleTodoItemPage from './features/Item/SingleTodoItemPage';
import React from 'react';


// Write your component below!
// This will be the main component that holds the todo list
// You can pass data from the App component to the TodoList component as props
// In the App component, you can define the state to hold the list of todos.
// Implement methods to add, remove, and toggle the completion status of todos, and update the state accordingly.
// Pass these methods down to the relevant components as props.
//TODO: Implement tests in setupTests.js
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
          <Route path='/todoList/' element={<TodoList />} />
          <Route path='/todoList/:itemId' element={<SingleTodoItemPage/>} ></Route>
      </Routes>       
    </Router>
  );
};
export default App;