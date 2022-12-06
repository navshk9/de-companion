import React from "react";

import { Form } from "react-bootstrap";

const TodoSelect = ({ setStatus }) => {
  // handler for settting filter status
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Form.Select className="todo-select" onChange={statusHandler} size="lg">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </Form.Select>
  );
};

export default TodoSelect;
