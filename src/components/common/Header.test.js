import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("should render same text passed into title prop", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});
