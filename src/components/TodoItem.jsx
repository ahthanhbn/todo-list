const TodoItem = (props) => {
  const { name, isCompleted , id, handleDeleteTodo, handleCompleteTodo} = props;
  return (
    <div className={isCompleted == true ? "todo completed": "todo"}>
      <li className="todo-list">{name}</li>
      <button className="complete-btn" onClick={() =>{
        handleCompleteTodo(id)
      }}>
        <i className="fas fa-check-circle" />
      </button>
      <button className="trash-btn" onClick = {() => {
        handleDeleteTodo(id)
      }}>
        <i className="fas fa-trash" />
      </button>
    </div>
  );
};

export default TodoItem;
