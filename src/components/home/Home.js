import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <header>
          <h1 className="home-title">Home</h1>
        </header>
        <h4 className="home-text">
          Welcome! Click on the "Tasks" link in the navigation bar to see all
          your onboarding tasks.
        </h4>
      </div>
    );
  }
}
