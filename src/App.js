import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home/Home";
import TodoContainer from "./components/onboarding/TodoContainer";
import NotFound from "./components/common/NotFound";
import Navigation from "./components/common/Navigation";

require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TodoContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
