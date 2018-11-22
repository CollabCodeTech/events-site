import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Colors from "./styles/settings/Colors";
import Reset from "./styles/generic/Reset";
import Base from "./styles/Base";

import App from "./App";

ReactDOM.render(
  <Fragment>
    <Colors />
    <Reset />
    <Base />
    <App />
  </Fragment>,
  document.getElementById("root")
);
