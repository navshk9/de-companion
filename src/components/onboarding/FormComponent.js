import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const FormComponent = ({ setInputText, inputText, setStatus, fetchData }) => {
  // handler for setting input text
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // handler for setting todo item
  const submitTodoHandler = (e) => {
    e.preventDefault();
    fetch("/api/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: inputText, completed: false }),
    }).then(() => {
      // get updated todos list with the id number set by cosmos db
      fetchData();
    });
    setInputText("");
  };

  // handler for settting filter status
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <Form className="todo-form" onSubmit={submitTodoHandler}>
      <Row>
        <Col>
          <Form.Control
            className="todo-input"
            value={inputText}
            type="text"
            onChange={inputTextHandler}
            size="lg"
            required
            placeholder="Enter a task..."
          />
        </Col>
        <Col>
          <Button
            className="todo-button"
            onClick={submitTodoHandler}
            type="submit"
            size="lg"
            variant="default"
            style={{ color: "white", background: "#98DDCA" }}
          >
            Add
          </Button>
        </Col>
        <Col>
          <Form.Select
            className="todo-select"
            onChange={statusHandler}
            size="lg"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
