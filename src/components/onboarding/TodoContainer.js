import React, { useState, useEffect } from "react";

// importing components
import FormComponent from "./FormComponent";
import TodoList from "./TodoList";
import Spinner from "../common/Spinner";

const TodoContainer = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // side effect to load todo list items from API and set todos state on inital load
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://todoapi-dev.azurewebsites.net/api/todo")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }

  // TODO: create a side effect to save todo list items to API whenever todos state changes

  // side effects
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // function used to set filtered list based on current status
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  return (
    <div className="todo-container">
      <header>
        <h1 className="todo-title">Onboarding Checklist</h1>
      </header>
      <FormComponent
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        fetchData={fetchData}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default TodoContainer;
