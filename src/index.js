import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.less";

const app = document.getElementById("root");

const render = (Component) =>
  ReactDOM.render(
    <Component />,
    app
  );

render(hot(App));
