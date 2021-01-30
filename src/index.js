import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./app/Components/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Dashboard />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
