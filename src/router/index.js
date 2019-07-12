import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//异步加载
import { loadComponent } from "@components/LoadComponent";

const App = loadComponent(() => import("@pages/app"));
const List = loadComponent(() => import("@pages/list"));
const Error = loadComponent(() => import("@pages/error"));

export default () => {
  return (
    <Router>
      <ul>
        <li>
          <NavLink to="/home" activeStyle={{ color: "red" }}>
            app
          </NavLink>
        </li>
        <li>
          <NavLink to="/list" activeStyle={{ color: "red" }}>
            list
          </NavLink>
        </li>
        <li>
          <NavLink to="/error" activeStyle={{ color: "red" }}>
            error
          </NavLink>
        </li>
      </ul>
      <div>
        <Route exact path="/home" component={App} />
        <Route path="/list" component={List} />
        <Route path="/error" component={Error} />
      </div>
    </Router>
  );
};
