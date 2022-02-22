import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

import TodoService from "../../services/TodoService";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    todos.map((item) => {
      if (item.id === todo.id) {
        TodoService.delete(todo.id);
      }
    });
    // matching clicked element with element from state
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          const newData = JSON.stringify({
            ...item,
            completed: !item.completed,
          });
          TodoService.put(newData);
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
      <button className="complete-btn" onClick={completeHandler}>
        <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Todo;
