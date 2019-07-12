// redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import counter from "@reducers/counter";

let store = createStore(
  combineReducers({ counter }),
  applyMiddleware(reduxThunk)
);

export default store;
