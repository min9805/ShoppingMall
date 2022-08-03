import React from "react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default Root;
