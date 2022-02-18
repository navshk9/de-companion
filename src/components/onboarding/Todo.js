import React from "react";
import { IconButton, TrashIcon, TickIcon, majorScale } from "evergreen-ui";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    todos.map((item) => {
      if (item.id === todo.id) {
        fetch(`/api/todo/${item.id}`, {
          method: "DELETE",
        }).then(() => {
          console.log("deleted successfully.");
        });
      }
    });
    // matching clicked element with element from state
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          fetch(`/api/todo/${item.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...item, completed: !item.completed }),
          }).then(() => {
            console.log("updated successfully.");
          });
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <IconButton
        onClick={completeHandler}
        className="complete-btn"
        icon={TickIcon}
        intent="success"
      />
      <IconButton
        onClick={deleteHandler}
        className="trash-btn"
        icon={TrashIcon}
        intent="danger"
        marginRight={majorScale(2)}
      />
    </div>
  );
};

export default Todo;
