import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";

// routers
import Routes from "@router";

// components
import Nav from "@components/nav";

// store
import { Provider } from "react-redux";
import store from "@store";

const App = hot(() => {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Routes />
      </Router>
    </Provider>
  );
});

ReactDom.render(<App />, document.getElementById("app"));
