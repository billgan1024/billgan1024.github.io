import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.scss";
import "./stylesheets/gradients.scss";
import "./stylesheets/animations.scss";
import "./stylesheets/nav.scss";
import "./stylesheets/card.scss";
import "./stylesheets/bubble.scss";
import "./stylesheets/form.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
