import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoSelect from "./TodoSelect";

describe("TodoSelect module", () => {
  it("should display the a selectlist", () => {
    render(<TodoSelect />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("should display the correct number of options", () => {
    render(<TodoSelect />);
    expect(screen.getByRole("combobox").length).toBe(3);
  });
  it("should render 'All' when nothing is selected ", () => {
    render(<TodoSelect />);
    expect(screen.getByText("All")).toBeInTheDocument();
  });
  it("should render 'Completed' when Completed is selected", () => {
    render(<TodoSelect />);
    fireEvent.click(screen.getByText("Completed"));
    expect(screen.getByText("Completed")).toBeInTheDocument();
  });
  it("should render 'Uncompleted' when Uncompleted is selected", () => {
    render(<TodoSelect />);
    fireEvent.click(screen.getByText("Uncompleted"));
    expect(screen.getByText("Uncompleted")).toBeInTheDocument();
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<TodoSelect onClick={handleClick} />);
    fireEvent.click(screen.getByText("Completed"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
