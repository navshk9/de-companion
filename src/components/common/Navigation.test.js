import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation module", () => {
  it("should render same text passed into title prop", async () => {
    render(<Navigation />);
    const headingElement = await screen.getByText(/DE Companion/i);
    expect(headingElement).toBeInTheDocument();
  });
  it("should render a Home link", async () => {
    render(<Navigation />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
  });
  it("should render a Tasks link", async () => {
    render(<Navigation />);
    expect(screen.getByText("Tasks").closest("a")).toHaveAttribute(
      "href",
      "/tasks"
    );
  });
});
