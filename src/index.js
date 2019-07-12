import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

// routers
import Routes from "@router";

// store
import { Provider } from "react-redux";
import store from "@store";

const App = hot(() => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
});

ReactDom.render(<App />, document.getElementById("app"));
