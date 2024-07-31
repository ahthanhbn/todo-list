import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const defaultTodoList = [
  {
    id: "1",
    name: "Task 1",
    isCompleted: true,
  },
  {
    id: "2",
    name: "Task 2",
    isCompleted: false,
  },
];

const filterTodoOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "completed",
    label: "Completed",
  },
  {
    value: "incomplete",
    label: "Incomplete",
  },
];

export default function App() {
  // TODO 8: Sau khi có state `status`, tạo 1 biến tên `filteredTodoList` để filter lại todoList với status tương ứng
  // Sau đó bỏ vào prop data của `TodoList` là `filteredTodoList`
  const [todoList, setTodoList] = useState(defaultTodoList);
  const [searchText, setSearchText] = useState("");
  const [status, setStatus] = useState();
  const handleDeleteTodo = (id) => {
    const deleteTodoList = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(deleteTodoList);
  };

  const handleCompleteTodo = (id) => {
    const completeTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, isCompleted : !todo.isCompleted
        };
      } else {
        return todo;
      }
    });
    setTodoList(completeTodoList)
  };

  return (
    <>
      <header>
        <h1>My To Do List</h1>
      </header>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newTodo = {
            id: new Date().getTime(),
            name: searchText,
            isCompleted: false,
          };
          setTodoList([newTodo, ...todoList]);
          setSearchText("");
        }}
      >
        <input
          type="text"
          className="todo-input"
          value={searchText}
          onChange={(event) => {
            const newValue = event.target.value;
            setSearchText(newValue);
          }}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-circle fa-lg" />
        </button>
        <div className="select">
          {/* TODO 7: Dùng onChange để update lại state `status` (tạo state tên là status) */}
          <select
            name="todos"
            className="filter-todo"
            value={status}
            onChange={(event) => {
              const newValue = event.target.value;
              setStatus(newValue);
            }}
          >
            {filterTodoOptions.map((item) => {
              return (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="todo-container">
        <TodoList
          handleCompleteTodo={handleCompleteTodo}
          handleDeleteTodo={handleDeleteTodo}
          todoList={todoList}
        />
      </div>
    </>
  );
}
