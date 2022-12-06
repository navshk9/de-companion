import React from "react";

// importing library components
import { Form, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

// importing custom components
import SpeechRecognition from "./SpeechRecognition";
import TodoSelect from "./TodoSelect";
import TodoService from "../../services/TodoService";
import { useFeatureFlag } from "../common/useFeatureFlag";

const TodoForm = ({
  setInputText,
  inputText,
  fetchData,
  setStatus,
  listening,
  setListening,
}) => {
  const { enabled: flag } = useFeatureFlag("speechRecognitionFlag"); // The feature flag key from App Config

  // handler for setting input text
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // handler for setting todo item
  const submitTodoHandler = (e) => {
    e.preventDefault();

    const newData = JSON.stringify({ text: inputText, completed: false });
    TodoService.post(newData).then(() => fetchData());
    setInputText("");
  };

  return (
    <Form onSubmit={submitTodoHandler}>
      <Row className="align-items-center">
        <Col sm={6}>
          <Form.Control
            className="me-auto"
            placeholder="Add your todo task here..."
            size="lg"
            type="text"
            value={inputText}
            onChange={inputTextHandler}
          />
        </Col>
        <Col sm={1}>
          <Button
            className="save-btn"
            type="submit"
            onClick={submitTodoHandler}
            variant="default"
            style={{ color: "#3b88d1", fontSize: "2.7rem" }}
          >
            <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>
          </Button>
        </Col>
        <Col sm={1}>
          {flag && (
            <SpeechRecognition
              setInputText={setInputText}
              listening={listening}
              setListening={setListening}
            />
          )}
        </Col>
        <Col sm={3}>
          <TodoSelect setStatus={setStatus} />
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
