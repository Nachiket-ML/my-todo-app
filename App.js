// Write your component below!
// This will be the main component that holds the todo list
// You can pass data from the App component to the TodoList component as props
// In the App component, you can define the state to hold the list of todos.

export default function App() {
    var todos = [];
    return (
        <>
            <TodoList> </TodoList>
            <AddTodo> {todos} </AddTodo>
        </>
    );
}
  
// export default function Congrats() {
//   return <Congratulations></Congratulations>
// }
  
  