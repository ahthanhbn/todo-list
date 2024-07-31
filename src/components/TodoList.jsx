import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {todoList, handleDeleteTodo, handleCompleteTodo} = props;
  return (
    <div className="todo-list">
      {todoList.map((item) => {
        return (
            <TodoItem key= {item.id} name = {item.name} isCompleted = {item.isCompleted} id = {item.id} handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo={handleCompleteTodo}/>
        );
      })}
    </div>
  );
};

export default TodoList;
