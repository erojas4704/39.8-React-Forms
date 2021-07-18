const Todo = ({task, deleteHandler}) => {
    return (
        <div data-testid="task">{task} <button onClick={deleteHandler}>X</button></div>
    )
}

export default Todo;