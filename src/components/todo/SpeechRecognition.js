import React from "react";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

import { ResultReason } from "microsoft-cognitiveservices-speech-sdk";

const speechsdk = require("microsoft-cognitiveservices-speech-sdk");

const SpeechRecognition = ({ setInputText, listening, setListening }) => {
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

  return (
    <Button
      className="mic-btn"
      onClick={StartListening}
      variant="default"
      style={
        listening
          ? { color: "red", fontSize: "2rem" }
          : {
              color: "#3b88d1",
              fontSize: "2rem",
            }
      }
    >
      <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
    </Button>
  );
};

export default SpeechRecognition;
