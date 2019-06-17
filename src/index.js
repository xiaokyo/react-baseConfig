import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// routers
import Routes from "@router";

// components
import Nav from "@components/nav";

// store
import { Provider } from "react-redux";
import store from "@store";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("app")
);
