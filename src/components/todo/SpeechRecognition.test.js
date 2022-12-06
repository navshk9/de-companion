import { render, screen, fireEvent } from "@testing-library/react";
import SpeechRecognition from "./SpeechRecognition";

describe("SpeechRecognition module", () => {
  it("should render a button", () => {
    render(<SpeechRecognition />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
