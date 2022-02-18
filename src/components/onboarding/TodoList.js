import React from "react";
import Todo from "./Todo";
// comment
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
