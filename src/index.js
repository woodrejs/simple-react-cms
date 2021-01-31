import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./app/Components/Dashboard";
import { ThemeProvider } from "styled-components";
import "./index.css";
// tmp
import Input from "./app/Components/Input";
import Button from "./app/Components/Button";
import File from "./app/Components/File";

//

const theme = {
  colors: {
    primary: "#FFFFFF",
    secoundary: "#0A94F1",
    third: "#F4F9FC",
    fourth: "#F5F9FC",
    fifth: "#000000",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Dashboard>
          <div
            style={{
              width: "500px",
              minHeight: "200px",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <File name="file name" />
          </div>
        </Dashboard>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
