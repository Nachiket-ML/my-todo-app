import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import TodoList from './features/List/TodoList';
import AddTodo from './features/Item/AddTodo';
import SingleTodoItemPage from './features/Item/SingleTodoItemPage';
import React, { useState } from 'react';
import { ItemState } from './features/Item/itemSlice'
import { useAppSelector } from './app/hooks';
import { selectList } from './features/List/todoListSlice';
// export default App;
// Write your component below!
// This will be the main component that holds the todo list
// You can pass data from the App component to the TodoList component as props
// In the App component, you can define the state to hold the list of todos.
// Implement methods to add, remove, and toggle the completion status of todos, and update the state accordingly.
// Pass these methods down to the relevant components as props.
//TODO: Implement tests in setupTests.js
//TODO: Add Redux

const App: React.FC = () => {
  // const [todos, setTodos] = useState([]);

  // const handleAddTodo = (newTodo) => {
  //   setTodos((prevTodos) => [...prevTodos, newTodo]);
  // }
  var todoItems = useAppSelector(selectList);
  return (
    <Router>
      <Routes>
          <Route path='/todoList/' element={<TodoList />} />
          {/* <Route path='/todoList/:itemId' element={<SingleTodoItemPage />}></Route> */}
          
          {/* <Route path='/todoList/:itemId' element={<SingleTodoItemPage ></SingleTodoItemPage>} ></Route> */}
          <Route path='/todoList/:itemId' element={<SingleTodoItemPage/>} ></Route>
          
          {/* <Route path='/todoList/:itemId' element={<SingleTodoItemPage />}></Route>             */}
          {/* <AddTodo />  */}
      </Routes>
      {/* <TodoList></TodoList>*/}
       
    </Router>
  );
};

// Helper function to find the item by ID from the todoItems array
// const findItemById = (todoItems: ItemState[], itemId?: string): ItemState | null => {
//   if (!itemId) {
//     return null;
//   }

//   const item = todoItems.find((item) => item.id === itemId);
//   return item || null;
// };

export default App;

{/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav> */}

// export default function App() {
//   // const [todos, setTodos] = useState([]);

//   // const handleAddTodo = (newTodo) => {
//   //   setTodos((prevTodos) => [...prevTodos, newTodo]);
//   // }

//   console.log(todos);
//   return (
//     <div className="App">
//           <TodoList todos={todos} setTodos={setTodos} />
//           <AddTodo todos={todos} /> 
//     </div>
//   );
// }

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