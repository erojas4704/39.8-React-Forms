import NewTodoForm from "./NewTodoForm"
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = form => {
        setTodos([...todos, {
            task: form.task,
            key: uuid()
        }]);
    }

    return (
        <div>
            <NewTodoForm onSubmit={addTodo} />
            {todos.map(todo => <Todo
                deleteHandler={() => setTodos(todos.filter(t => t.key !== todo.key))}
                key={todo.key}
                task={todo.task}
            />)}
        </div>
    )
}

export default TodoList;