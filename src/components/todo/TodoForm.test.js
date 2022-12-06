import { render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm module", () => {
  it("should render a button", () => {
    render(<TodoForm />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render an input field", () => {
    render(<TodoForm />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("should render an selectlist field", () => {
    render(<TodoForm />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
});
