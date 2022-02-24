import React from "react";

import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import TodoService from "../../services/TodoService";

import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";

const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

const SpeechRecognition = ({
  setInputText,
  inputText,
  fetchData,
  listening,
  setListening,
  setStatus,
}) => {
  // envirnment variables for key and region
  const { REACT_APP_SPEECH_KEY, REACT_APP_SPEECH_REGION } = process.env;

  const speechConfig = speechsdk.SpeechConfig.fromSubscription(
    REACT_APP_SPEECH_KEY,
    REACT_APP_SPEECH_REGION
  );

  speechConfig.speechRecognitionLanguage = "en-US";

  const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
  const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

  // function for recording audio for microphone and setting input text
  const StartListening = () => {
    setInputText("I'm listening...");
    setListening(true);

    recognizer.recognizeOnceAsync((result) => {
      if (result.reason === ResultReason.RecognizedSpeech) {
        setInputText(result.text);
      } else {
        setInputText(
          "ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly."
        );
      }
      setListening(false);
      recognizer.close();
    });
  };

  // handler for setting input text
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  // handler for settting filter status
  const statusHandler = (e) => {
    setStatus(e.target.value);
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Button
          className="mic-btn"
          onClick={StartListening}
          size="lg"
          variant="default"
          style={
            listening
              ? { color: "red", background: "#ffaaa7" }
              : { color: "#fee440", background: "#3b88d1" }
          }
        >
          <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
        </Button>
        <Button
          className="save-btn"
          type="submit"
          onClick={submitTodoHandler}
          size="lg"
          variant="default"
          style={{ color: "#3b88d1", background: "#FEE440", margin: "1rem" }}
        >
          Save
        </Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          value={inputText}
          onChange={inputTextHandler}
          rows={3}
        />
      </Form.Group>

      <Form.Select className="todo-select" onChange={statusHandler} size="lg">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </Form.Select>
    </Form>
  );
};

export default SpeechRecognition;
