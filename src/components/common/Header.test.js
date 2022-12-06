import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header module", () => {
  it("should render same text passed into title prop", async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should render a heading", async () => {
    render(<Header title="My Header" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
