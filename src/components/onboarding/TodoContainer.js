import React, { useState, useEffect } from "react";

// importing components
import TodoList from "./TodoList";
import Header from "../common/Header";
import { useFeatureFlag } from "../../useFeatureFlag";

import SpeechRecognition from "./SpeechRecognition";
import TodoService from "../../services/TodoService";

const TodoContainer = () => {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [listening, setListening] = useState(false);

  const { enabled: flag } = useFeatureFlag("speechRecognitionFlag"); // The feature flag key from App Config

  // side effect to load todo list items from API and set todos state on inital load
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    TodoService.get().then((res) => setTodos(res.data));
  }

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
      <Header title="Tasks" />

      {flag && (
        <SpeechRecognition
          inputText={inputText}
          setInputText={setInputText}
          fetchData={fetchData}
          listening={listening}
          setListening={setListening}
          setStatus={setStatus}
        />
      )}

      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default TodoContainer;
