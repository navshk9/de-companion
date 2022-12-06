import { render, screen, fireEvent } from "@testing-library/react";
import TodoContainer from "./TodoContainer";

describe("TodoContainer module", () => {
  it("should render a 'Tasks' heading", async () => {
    render(<TodoContainer />);
    const headingElement = await screen.getByText(/Tasks/i);
    expect(headingElement).toBeInTheDocument();
  });
});
