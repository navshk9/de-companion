import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home module", () => {
  it("should render a 'Home' heading", async () => {
    render(<Home />);
    const headingElement = await screen.getByText(/Home/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render some text", async () => {
    render(<Home />);
    const headingElement = await screen.getByText(
      /Welcome! Click on the "Tasks" link in the navigation bar to see all your onboarding tasks./i
    );
    expect(headingElement).toBeInTheDocument();
  });
});
