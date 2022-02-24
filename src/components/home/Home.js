import React, { Component } from "react";
import Header from "../common/Header";

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header title="Home" />
        <h4 className="home-text">
          Welcome! Click on the "Tasks" link in the navigation bar to see all
          your onboarding tasks
        </h4>
      </div>
    );
  }
}
