// This component will render the list of todos
function TodoList(todos) {
    return (
        <ul> 
            {todos.map((todo) => TodoItem(todo))}
        </ul>
    );
}